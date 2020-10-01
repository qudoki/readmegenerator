// Correctly use the inquirer package 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        message: "What is the name of your project?",
        name: "name"
    },
    {
        message: "What is the project description (include technologies used)?",
        name: "name"
    },
    {
        message: "What should the user enter to install dependencies?",
        name: "name"
    },
    {
        message: "What should the user enter to run tests?",
        name: "name"
    },
    {
        message: "What are the contribution guidelines?",
        name: "name"
    },
    {
        message: "What should the user know about contributing to the repository?",
        name: "name"
    },
    {
        message: "What type of license would you like?",
        name: "name",
        type: "list",
        choices: ["MIT"]
    },
    {
        message: "Do you have any other comments?",
        name: "name"
    },
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




