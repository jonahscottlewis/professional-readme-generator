const inquirer = require('inquirer');
const fs = require('fs')
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your user story?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What, if any are your project dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the uses of your project?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who are the contributers to this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: "Please select a licesne applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
];

function writeToFile (fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

  function init() {
    inquirer.prompt(questions).then((responses) =>{
      console.log("Creating README.md");
      writeToFile("./distribution/README.md", generateMarkdown({...responses }));
    });
  }

init();