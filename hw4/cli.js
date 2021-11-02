#!/home/natalia/.nvm/versions/node/v15.9.0/bin/node

const fs = require("fs");
const readline = require('readline');
const inquirer = require('inquirer');

const isDirectory = (dirName) => fs.lstatSync(dirName).isDirectory();

const goToTheDirectory = async (executionDir = process.cwd()) => {
    const directoryList = fs.readdirSync(executionDir).filter(file => isDirectory(`${executionDir}/${file}`));

    const {dirName} = await inquirer.prompt([{
        name: 'dirName',
        type: 'list',
        message: 'Choose a directory to read',
        choices: directoryList,
    }]);

    const fullPath = `${executionDir}/${dirName}`;

    fs.readdir(fullPath, 'utf-8', async (err, files, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const subDirs = files.filter(file => isDirectory(`${fullPath}/${file}`));

        if (subDirs.length > 0) {
            await goToTheDirectory(fullPath);
            return;
        }
        // console.log(files);
        const {fileName} = await inquirer.prompt([{
            name: 'fileName',
            type: 'list',
            message: 'Choose a file to read',
            choices: files,
        }]);

        fs.readFile(`${fullPath}/${fileName}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(data);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question('Search for: ', (word) => {
                console.log(word);
                if (data.match(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu)) {
                    console.log('found')
                } else {
                    console.log('not found')
                }
                rl.close();
            });
        });
    });
}

goToTheDirectory();



