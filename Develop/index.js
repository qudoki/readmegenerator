// Correctly use the inquirer package 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        message: "Hi! What's your full name?",
        name: "username"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
    {
        message: "What is your Github profile?",
        name: "github"
    },
    {
        message: "What is the name of your project?",
        name: "project"
    },
    {
        message: "What is the project description (include technologies used)?",
        name: "description"
    },
    {
        message: "What should the user enter to install dependencies?",
        name: "dependencies"
    },
    {
        message: "What should the user enter to run the program or tests?",
        name: "running"
    },
    {
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        message: "What should the user know about contributing to the repository?",
        name: "request"
    },
    {
        message: "What type of license would you like?",
        name: "license",
        type: "list",
        choices: ["MIT", "Apache License 2.0", "BSD 3-Clause", "BSD 2-Clause", "GNU General Public License", "Common Dev. & Distribution License", "Eclipse Public License 2.0"]
    },
    {
        message: "What year(s) should be on the license?",
        name: "year"
    },
    {
        message: "Do you have any other comments?",
        name: "comments"
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

    console.log(answers);
    writeToFile(answers.project + ".md", mdString);
}

// function call to initialize program
init();




