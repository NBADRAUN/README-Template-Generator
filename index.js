const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "what is the title of your project?",
      name: "projecttitle",
    },
    {
      type: "input",
      message: "what is the description of your project?",
      name: "projectdescription",
    },
    {
      type: "input",
      message: "what are the installation steps?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use the application?",
      name: "usage",
    },
    {
      type: "list",
      name: "license",
      message: "Do you want to add a license?",
      choices: ["MIT", "Apache", "GPL", "BSD-3-Clause", "None"],
    },
    {
      type: "input",
      message: "List any collaborators",
      name: "collaborators",
    },
    {
      type: "input",
      message: "List your application features",
      name: "features",
    },
    {
      type: "input",
      message: "How can users contribute?",
      name: "contribution",
    },
    {
      type: "input",
      message: "How can a user test your application?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "githubusername",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])

  .then((response) => {
    const fileName = "README.md";
    const text = `

# ${response.projecttitle} 

## Description 
${response.projectdescription}



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Credits
${response.collaborators}

## Features

${response.features}

## Contribute

${response.contribution}

## Tests

${response.test}

## Questions 
- Github profile - https://github.com/${response.githubusername}
- For any questions, please email me at ${response.email}
    
    `;

    fs.writeFile(fileName, text, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
