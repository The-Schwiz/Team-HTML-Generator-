const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Assets/lib/engineer.js");
const Intern = require("./Assets/lib/intern");
const Employee = require("./Assets/lib/employee");
const Manager = require("./Assets/lib/manager");

// main manager function 
//inside function you have helper functions to add team members
// final function to push data to html 
//Each function calls the next function 
// prompt are inside each function 

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
                // TODO: add engineer
                employees.push('engineer');
                console.log('add engineer');
                break;
            case 'Intern':
                // TODO: add intern
                employees.push('intern');
                console.log('add intern');
                break;
            default:
                isAddingEmployees = false;
                break;
        }
        firstEmployee = false;
    }
    // build your team (generate html)
    //after prompt is done, loop through each employee and create a string representing the employee as an html. 
    //use get role to identify type of employee and generate html accordinly 
    // call generate html function from lib folder
    console.log(employees);
    // TODO: generate html
};
main();
    // inquirer
    // .prompt([
    //     {
    //         type: 'checkbox',
    //         message: 'Would you like to add a new employee to your team?',
    //         name: 'addEmployee',
    //         choices: ["Manager","Engineer","Intern", "None"],
    //     },
    // ])
    // .then((data) => {
    //     switch (data.userEmployeeChoice) {
    //     case "Manager":
    //         addManager();
    //         break;
    //     case 'Engineer':
    //         addEngineer();
    //         break;
    //     case 'Intern':
    //         addIntern();
    //         break;
    //     default:
    //         buildTeam();
    //     }
    // });
    // const userEmployeeChoice = data.choices 

    // //get all the teams
    // const teams = await getTeams();

    // //get all the employees
    // const employees = await getEmployees();

    // //get all the managers
    // const managers = await getManagers();


    // //get all the engineers
    // const engineers = await getEngineers();

    // //get all the interns
    // const interns = await getInterns();



// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'What is your team managers name?',
//         name: 'managerName',
//     },
//     {
//         type: 'input',
//         message: `What is ${managerName}'s employee ID?`,
//         name: 'managerId',
//     },
//     {
//         type: 'input',
//         message: `What is ${managerName}'s email address?`,
//         name: 'managerEmail',
//     },
//     {
//         type: 'input',
//         message: `what is ${managerName}'s office number?`,
//         name: 'managerNumber',
//       },
//       {
//         type: 'checkbox',
//         message: 'Who else would you like to add to your team?',
//         name: 'teamMembers',
//         choices: ["Engineer","Intern", "None"],
//       },
//       {
//         type: 'input',
//         message: 'What is your engineers name?',
//         name: 'engineerName',
//       },
//       {
//         type: 'input',
//         message: `What is ${engineerName}'s employee ID?`,
//         name: 'engineerId',
//     },
//     {
//         type: 'input',
//         message: `What is ${engineerName}'s email address?`,
//         name: 'engineerEmail',
//     },
//     {
//         type: 'input',
//         message: `what is ${engineerName}'s GitHub user name?`,
//         name: 'engineerGithub',
//     },
//     {
//         type: 'input',
//         message: 'What is your interns name?',
//         name: 'internName',
//     },
//     {
//         type: 'input',
//         message: `What is ${internName}'s employee ID?`,
//         name: 'internId',
//     },
//     {
//         type: 'input',
//         message: `What is ${internName}'s email address?`,
//         name: 'internEmail',
//     },
//     {
//         type: 'input',
//         message: `what school does ${internName} attend?`,
//         name: 'internSchool',
//     },
//   ])
  

//   .then ((data) => {
//     const htmlPageContent = generateHTML(data);
    
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.error(err) : console.log("data stored")
    
//     )});
    
    
//     const generateHTML = ({some keys here}) => {
//         return `
//         <div class="container">
//         <div class="row">
//             <div class="team-area col-12 d-flex justify-content-center">
//                 <card class="card employee-card">
//                     <div class="card-header">
//                         <h2 class="card-title">${managerName}</h2>
//                         <h3 class="card-title">${role}</h3>
//                     </div>
//                     <div class="card-body">
//                         <ul class="list-group">
//                             <li class="list-group-item">ID:${managerId}</li>
//                             <li class="list-group-item">Email: ${managerEmail} </li>
//                             <li class="list-group-item">Office Number: ${managerNumber} </li>
//                         </ul>
//                     </div>
//                 </card>
`
//     };

