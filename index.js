// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput() {
    return inquirer.prompt([
        {
            name: 'license',
            message: 'Select a license for this application:',
            type: 'list',
            choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", /*...other license choices...*/]
        },
        {
            name: 'description',
            message: 'What does this application do?',
            type: 'input'
        },
        {
            name: 'username',
            message: 'What is your Github username?',
            type: 'input'},
        {
            name: 'email',
            message: 'What is your e-mail?',
            type: 'input'
       },
        {
    
            name: 'testing',
            message: 'How do I test this application?',
            type: 'input'
        },
        {
    
           name: 'usage',
           message: 'How do I use this application?',
           type: 'input'
      },
      {
    
           name: 'Installation',
           message: 'How do I install this application?',
           type: 'input'
    }, 
        {
            name: 'contributing',
            message: 'How do I contribute to this application?',
            type: 'input'
        },
        {name: 'title',
        message: 'What do you want to call this readme?',
        type: 'input'},
    ])};
    
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${fileName}.md has been generated.`);
      }
    });
  }
  
  async function init() {
    let answers = await userInput();
    writeToFile(answers.title, generateMarkdown(answers));
  }
  
  init();