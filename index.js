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

const completeDirectory = () => {
  console.log('Directory completed');
  fs.writeFileSync('index.html', createTeamProfileGenerator, 'utf-8')
}

questionsManager();