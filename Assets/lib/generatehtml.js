const fs = require('fs');

// write html file after collecting all employees
function writeHTMLFile (employees){
    const htmlStr = generateHTMLStr(employees);
    fs.writeFile('index.html', htmlStr, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// return total html string
function generateHTMLStr(employees){
    let htmlStr = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./Assets/style.css">
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container main-header">
                    <h1 class="display-4">My Team</h1>
                </div>
            </div>
            <div class="container">
                <div class="row">`;    
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        switch (employee.getRole()){
            case 'Manager':
                htmlStr += generateManagerHTMLStr(employee);
                break;
            case 'Engineer':
                htmlStr += generateEngineerHTMLStr(employee);
                break;
            case 'Intern':
                htmlStr += generateInternHTMLStr(employee);
                break;
            default:
                throw new Error('Not a Manager / Engineer / Intern Object');
        }
    }
    htmlStr += `</div>
                </div>
            </body>
        </html>`
    return htmlStr;
}

//generates html strings for each role 
function generateManagerHTMLStr(manager){
    return `<card class="card employee-card" data-employee-type="manager">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${manager.id} </li>
            <li class="list-group-item">Email: ${manager.email} </li>
            <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
        </ul>
    </div>
</card>`

}

function generateInternHTMLStr(intern){
    return `<card class="card employee-card" data-employee-type="intern">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${intern.id} </li>
            <li class="list-group-item">Email: ${intern.email} </li>
            <li class="list-group-item">School: ${intern.school} </li>
        </ul>
    </div>
</card>`

}

function generateEngineerHTMLStr(engineer){
    return `<card class="card employee-card" data-employee-type="engineer">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${engineer.id} </li>
            <li class="list-group-item">Email: ${engineer.email} </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</card>`
}


module.exports = { writeHTMLFile, generateHTMLStr, generateManagerHTMLStr, generateInternHTMLStr, generateEngineerHTMLStr };

//can make helper functions for dealing with each kind of employee object (manager, engineer, intern)