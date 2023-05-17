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

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Welcome to the Folklore directory! Who do you want to add to the troupe?',
            choices: [ 'Manager', 'Engineer', 'Intern', 'The troupe is done!'] 
        }])
        .then(res => {
            switch (res.newTeamMember) {
                case "Manager":
                    questionsManager();
                    break;
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

const promptLore = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Done! Who else do you want to add to the Folklore world?',
            choices: [ 'Manager', 'Engineer', 'Intern', 'The troupe is done!'] 
        }])
        .then(res => {
            switch (res.newTeamMember) {
                case "Manager":
                    questionsManager();
                    break;
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
        promptLore()
    })
};


const questionsEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the engineer\'s name.',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter the engineer\'s ID',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the engineer\'s email address',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter the engineer\'s github username',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        employees.push(engineer);
        promptLore();
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
        promptLore();
    })
};


// Complete the bunch and generate the file
const completeTeam = () => {
    console.log(`The Folklore Directory is ready!`);
    fs.writeFileSync('teams.html', generateHTML(employees), "utf-8");
}

// Call promptMenu to start the process
promptMenu();