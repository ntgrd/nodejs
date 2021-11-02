#!/home/natalia/.nvm/versions/node/v15.9.0/bin/node

const fs = require("fs");
const readline = require('readline');
const path = require("path");
// const yargs = require("yargs");
// const inquirer = require('inquirer');

// const LOG_FILE = './access_short.log';

// fs.readFile(LOG_FILE, 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });
// fs.readFile(process.argv[2], 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });

// const options = yargs
//     .usage('Usage: -p <path to the file>')
//     .option('p', {
//         alias: 'path',
//         // alias: ['path', 'path2']
//         describe: 'Path to the file',
//         type: 'string',
//         demandOption: true,
//     }).argv;
//
// fs.readFile(options.p, 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Please enter the path to the file: ', (filePath) => {
//     console.log(filePath);
//     rl.close();
// });

// const question = async (question) => new Promise(resolve => rl.question(question, resolve));
//
// (async () => {
//     const filePath = await question('Please enter the path to the file: ');
//     // const fullPath = path.join(__dirname, filePath);
//     const fullPath = path.resolve(__dirname, filePath);
//     const encoding = await question('Please enter encoding: ');
//
//     const data = fs.readFileSync(fullPath, encoding);
//     console.log(data);
//     rl.close();

// fs.readFile(filePath, encoding, (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
//     rl.close();
// });
// })()

// const executionDir = process.cwd();
// const isFile = (fileName) => fs.lstatSync(fileName).isFile();
// const fileList = fs.readdirSync('./').filter(isFile);
//
// inquirer.prompt([
//     {
//         name: 'fileName',
//         type: 'list', // input, number, confirm, list, checkbox, password
//         message: 'Choose a file to read',
//         choices: fileList,
//     },
// ])
//     .then(({fileName}) => {
//         const fullPath = path.join(executionDir, fileName);
//         fs.readFile(fullPath, 'utf-8', (err, data) => {
//             if (err) console.log(err);
//             else console.log(data);
//         });
//     });

// const isDirectory = (dirName) => fs.lstatSync(dirName).isDirectory();
// const directoryList = fs.readdirSync('./').filter(isDirectory);
//
// inquirer.prompt([
//     {
//         name: 'dirName',
//         type: 'list',
//         message: 'Choose a directory to read',
//         choices: directoryList,
//     },
// ])
//     .then(({dirName}) => {
//         const fullPath = path.join(executionDir, dirName);
//         fs.readdir(fullPath, 'utf-8', (err, data) => {
//             if (err) console.log(err);
//             else console.log(data);
//         });
//     });



