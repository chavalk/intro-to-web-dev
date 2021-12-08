const fs = require('fs');
const inquirer = require('inquirer');

const question = [
    {
        type: 'input',
        message: 'What is the name of the file?',
        name: 'file',
    },
]

function getFileName() {
    inquirer.prompt(question).then(res => {
        fs.writeFile(`${res.file}.txt`, 'You are awesome', { flag: 'wx' }, err => {
            if (err) {
                // console.error(err);
                console.log('File already exists. Please enter a different name.');
                getFileName();
            } else {
                console.log('File written successfully!');
            }
        })
    })
}

getFileName();