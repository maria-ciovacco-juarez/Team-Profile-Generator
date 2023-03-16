const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const createTeamProfileGenerator = require("./src/document.js");

const Engineer = require ('./lib/engineer.js');
const Intern = require ('./lib/intern.js');
const Manager = require ('./lib/manager.js');
const employees = [];

const validateInput = (userInput)=> {
  if(userInput==="") {
    return "Cannot leave blank. Please type your response before proceeding.";
  }else{
    return true;
  }
};

// Array of questions for terminal/CLI
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
  })
}

const employeeQuestions=[
  {
    type: 'list',
    message: "Select employee type you wish to add:",
    name: "employeeType",
    choices: [
      {name: 'Engineer'},
      {name: 'Intern'},
      {name: 'None'},
    ],
  },
];

const{employeeType} = () => {
  return inquirer.prompt(employeeQuestions);
}

if(employeeType === "none"){
  isTeamComplete = true;
} else {
  if (employeeType === 'engineer'){
    return createEngineer();
  }
  if (employeeType === 'intern'){
    return createIntern();
  }
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
}

const completeDirectory = () => {
  console.log('Directory completed');
  fs.writeFileSync('index.html', createTeamProfileGenerator, 'utf-8')
}

questionsManager();

