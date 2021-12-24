const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 8000;

const checkIsDirectory = (path) => fs.lstatSync(path).isDirectory();

const getPathFromRequest = (request) => {
    const {query} = url.parse(request.url, true);

    const executionDir = process.cwd();

    return query.path || executionDir;
}

const buildDirectoryContent = async (path) => {
    const fileNames = await fs.promises.readdir(path);
    const fileNamesWithPath = fileNames.map(fileName => `${path}/${fileName}`);
    const linksToFiles = fileNamesWithPath.map(path => `<a href="http://localhost:${PORT}?path=${path}">${path}</a><br />`);

    return linksToFiles.join('');
}

const buildFileContent = async (path) => {
    const fileContent = await fs.promises.readFile(path, {encoding: 'utf-8'});

    return `<pre>${fileContent}</pre>`;
}

const buildPageBody = async (path, isDirectory) => {
    let content;

    if (isDirectory) {
        content = await buildDirectoryContent(path);
    } else {
        content = await buildFileContent(path);
    }

    return content;
}

const wrapBodyWithHtml = (body) => `<html><body>${body}</body></html>`;

function writeResponse(response, html) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
}

const processHttpRequest = async (request, response) => {
    const path = getPathFromRequest(request);
    const isDirectory = checkIsDirectory(path);
    const body = await buildPageBody(path, isDirectory);
    const html = wrapBodyWithHtml(body);
    writeResponse(response, html);
};

function main() {
    const server = http.createServer(processHttpRequest);
    server.listen(PORT);
}

main();
