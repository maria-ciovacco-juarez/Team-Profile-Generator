const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require("./src/generateHTML");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = [];


// let isDirectoryComplete = false;

// const validateInput = (userInput) => {
//   if (userInput === "") {
//     return "Cannot leave blank. Please type your response before proceeding.";
//   } else {
//     return true;
//   }
// };

//CLI array of questions
const questionsManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the managers name.',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the managers employee ID',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the managers email address',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter the managers office number',
        },

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        employees.push(manager);
        promptMenu()
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Do you want to add a new team member to your team?',
            choices: ['Engineer', 'Intern', 'My team is complete'] 
        }])
        .then(res => {
            switch (res.newTeamMember) {
                case "Engineer":
                    questionsEngineer();
                    break;
                case "Intern":
                    questionsIntern();
                    break;
                default:
                    completeTeam();
            }
        });
};

const questionsEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the engineers name.',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter the engineers ID',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the engineers email address',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter the engineers github username',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        employees.push(engineer);
        promptMenu();
    })
};

const questionsIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter the interns name.',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter the interns ID',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the interns email address',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the interns school',
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        employees.push(intern);
        promptMenu();
    })
};

const completeTeam = () => {
    console.log(`Team is complete`);
    fs.writeFileSync('teams.html', generateHTML(employees), "utf-8");
}
questionsManager();