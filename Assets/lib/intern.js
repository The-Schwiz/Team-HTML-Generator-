const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");

// extends the Employee class to create the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
// intern prompts the user for the Intern's name, id, email, and school
    static async createIntern() {
        const answers = await inquirer
          .prompt([
            {
                type: 'input',
                message: 'What is your interns name?',
                name: 'internName',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s employee ID?`,
                name: 'internId',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s email address?`,
                name: 'internEmail',
            },
            {
                type: 'input',
                message: `what school does ${this.name} attend?`,
                name: 'internSchool',
            },
        ]);
        // create manager object
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        );
        return intern;
    }
}

module.exports = Intern;