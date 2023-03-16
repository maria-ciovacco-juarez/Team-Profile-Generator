const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const createTeamProfileGenerator = require("./src/genrateHTML.js");

const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const employees = [];

let isDirectoryComplete = false;

const validateInput = (userInput) => {
  if (userInput === "") {
    return "Cannot leave blank. Please type your response before proceeding.";
  } else {
    return true;
  }
};

const innit = async () => {
  await createManager();

  while (!isDirectoryComplete) {
    const employeeQuestions = [
      {
        type: 'list',
        message: "Select employee type you wish to add:",
        name: "employeeType",
        choices: [
          { name: 'Engineer' },
          { name: 'Intern' },
          { name: 'None' },
        ],
      },
    ];

    const { employeeTeamMember } = await inquirer.prompt(employeeQuestions);

    if (employeeTeamMember === 'none') {
      isDirectoryComplete = true;
    } else {
      if (employeeTeamMember === "engineer") {
        await newEngineer();
      }
      if (employeeTeamMember === "intern") {
        await newIntern();
      }
    }

  }

  const completeDirectory = () => {
    console.log('Directory completed');
    fs.writeFileSync('index.html', completeDirectory, HTML, createTeamProfileGenerator, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("HTML file created");
      }
    })
  }


}

// Array of questions for terminal / CLI
const questionsManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter Manager name:',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'managerID',
      message: "Please enter your Manager Employee ID:",
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Please enter your Manager email address:',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'Please enter your office number',
      validate: validateInput,
    },
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
    employees.push(manager);
    promptEmployeeMenu()

    questionsManager();
  })
}


const newEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      message: "Enter Engineer name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: 'input',
      message: "Enter Engineer ID number:",
      name: 'id',
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter Engineer email address:",
      name: 'email',
      validate: validateInput,
    },
    {
      type: 'input',
      message: "Enter Engineer github user:",
      name: 'github',
      validate: validateInput,
    },
  ];

  // engineer answers are generated from user input
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(engineerAnswers);

  employees.push(engineer);
}

// Create Intern
const newIntern = async () => {
  const internQuestions = [
    {
      type: 'input',
      message: "Enter Intern name:",
      name: 'name',
      validate: validateInput,
    },
    {
      type: 'input',
      message: "Enter Intern ID number:",
      name: 'id',
      validate: validateInput,
    },
    {
      type: 'input',
      message: 'Enter Intern email:',
      name: 'email',
      validate: validateInput,
    },
    {
      type: 'input',
      message: 'Enter Intern school name:',
      name: 'school',
      validate: validateInput,
    },
  ];
  // Answers input for intern will be generated from user input
  const internAnswers = await inquirer.prompt(internQuestions);

  const intern = new Intern(internAnswers);

  employeeQuestions.push(intern);
}


innit();





