const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");

// extends the Employee class to create the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return "Manager";
    }

    // manager prompts the user for the Manager's name, id, email, and office number
    static async createManager() {
        const answers = await inquirer
          .prompt([
            {
                type: 'input',
                message: 'What is your team managers name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s employee ID?`,
                name: 'managerId',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s email address?`,
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s office number?`,
                name: 'managerNumber',
            },
        ]);
        // create manager object
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerNumber
        );
        return manager;
    }
}

module.exports = Manager;