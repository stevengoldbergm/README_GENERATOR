// TODO: Include packages needed for this application
const genMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your new project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description.',
    },

    {
        type: 'input',
        name: 'install',
        message: 'How is your project installed?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: [
            'Apache 2.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'GNU General Public License (GPL-3)',
            'GNU General Public License (GPL-2)',
            'GNU Library or "Lesser" General Public License (LGPL)',
            'MIT license',
            'Mozilla Public License 2.0',
            'Ecliipse Public License version 2.0',
            'None'
        ]
    },

    {
        type: 'input',
        name: 'cont',
        message: "What are your project's contribution guidelines?"
    },

    {
        type: 'input',
        name: 'test',
        message: 'How do you run tests on your project?'
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    // This is where you'll run the Inquirer questions
    // At the end, you'll be able to define fileName and data from your answers
inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)

        // Define a filename
        const fileName = 'READMESAMPLE.md';
        console.log(fileName);
        
        // Define data
        const data = generateMarkdown(response)

        // Use the variables to initialize writeToFile(fileName, data)
        writeToFile(fileName, data);
        
    })

}

// Function call to initialize app
init();
