const inquirer = require("inquirer");
const Employee = require("./employee");

//extends the Employee class to create the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
// prompts the user for the Engineer's name, id, email, and github username
    static async createEngineer() {
        const answers = await inquirer
          .prompt([
            {
                type: 'input',
                message: 'What is your engineers name?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s employee ID?`,
                name: 'engineerId',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s email address?`,
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: `What is ${this.name}'s GitHub user name?`,
                name: 'engineerGithub',
            },
        ]);
     
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub,
        );
        return engineer;
    }
}

module.exports = Engineer;