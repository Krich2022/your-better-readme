// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { join } = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "user",
    message: "What is your GitHub username?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your email?",
    type: "input",
  },
  {
    name: "repoLink",
    message: "What is the link to the repo?",
    type: "link",
  },
  {
    name: "title",
    message: "What is the name of your project?",
    type: "input",
  },
  {
    name: "desc",
    message: "Write a short description of your project.",
    type: "input",
  },
  {
    name: "license",
    message: "What kind of license should your project have?",
    type: "list",
    choices: [
      { name: "MIT License", value: "MIT" },
      { name: "GNU AGPLv3", value: "AGPL-3.0" },
      { name: "GNU GPLv3", value: "GPL-3.0" },
      { name: "GNU LGPLv3", value: "LGPL-3.0" },
      { name: "Mozilla Public License 2.0", value: "MPL-2.0" },
      { name: "Apache License 2.0", value: "Apache-2.0" },
      { name: "Boost Software License 1.0", value: "BSL-1.0" },
      { name: "The Unlicense", value: "" },
    ],
  },
  {
    name: "install",
    message: "What command should be used to install dependencies?",
    type: "input",
  },
  {
    name: "test",
    message: "What command should be used to test?",
    type: "input",
  },
  {
    name: "usage",
    message: "How do you use the application?",
    type: "input",
  },
  {
    name: "repo",
    message: "What should the user know about using the repo?",
    type: "input",
  },
  {
    name: "contribute",
    message: "What should the user know about contributing to the repo?",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`File ${fileName} created successfully!`);
  });
}

// TODO: Create a function to initialize app
const init = async () => {
  const data = await inquirer.prompt(questions);
  const markdown = generateMarkdown(data);
  return writeToFile(`${data.title}.md`, markdown);
};

// Function call to initialize app
init();
