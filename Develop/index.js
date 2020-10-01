// Correctly use the inquirer package 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        message: "What is your project name?",
        name: "name"
    },
    {
        message: "What is your age?",
        name: "name"
    }
];

// function to write README file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const mdString = generateMarkdown(answers);



    writeToFile(answers.name + ".md", mdString);
}

// function call to initialize program
init();




