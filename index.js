const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Assets/lib/engineer.js");
const Intern = require("./Assets/lib/intern");
const Employee = require("./Assets/lib/employee");
const Manager = require("./Assets/lib/manager");
const { writeHTMLFile } = require("./Assets/lib/generateHtml");

// the main function to run the application, initially prompting the user to add a new employee - if no employee the app creates the html file. 
const main = async () => {
    const employees = [];
    let firstEmployee = true;
    let isAddingEmployees = true;
    while (isAddingEmployees) {
        let choiceMessage = 'Would you like to add a new employee to your team?';
        if (!firstEmployee) {
            choiceMessage = 'Would you like to add another employee to your team?';
        }
        const answer = await inquirer
            .prompt([
                {
                    type: 'list',
                    message: choiceMessage,
                    name: 'employeeChoice',
                    choices: ["Manager","Engineer","Intern", "None"],
                },
            ]);
        switch (answer.employeeChoice)  {
            case "Manager":
                const manager = await Manager.createManager();
                employees.push(manager);
                break;
            case 'Engineer':
                // add engineer
                const engineer = await Engineer.createEngineer();
                employees.push(engineer);
                break;
            case 'Intern':
                // add intern
                const intern = await Intern.createIntern();
                employees.push(intern);
                break;
            default:
                isAddingEmployees = false;
                break;
        }
        firstEmployee = false;
    }

    writeHTMLFile(employees);
};
main();
 
