// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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
      "MIT License",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNGU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
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
  console.log(data);
  console.log(markdown);
  writeToFile(data.title, markdown);
};

// Function call to initialize app
init();
