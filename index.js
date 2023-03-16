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
