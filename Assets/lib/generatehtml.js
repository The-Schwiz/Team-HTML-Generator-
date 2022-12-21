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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">`;
    
    for (let i = 0; i < employees.length; i++){
        
    }
}

function generateManagerHTMLStr(manager){
    return `<card class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${managerId} </li>
            <li class="list-group-item">Email: ${managerEmail} </li>
            <li class="list-group-item">Office Number: ${managerNumber} </li>
        </ul>
    </div>
</card>`

}

function generateInternHTMLStr(intern){
    return `<card class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${internId} </li>
            <li class="list-group-item">Email: ${internEmail} </li>
            <li class="list-group-item">School: ${internSchool} </li>
        </ul>
    </div>
</card>`

}

function generateEngineerHTMLStr(engineer){
    return `<card class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${engineerId} </li>
            <li class="list-group-item">Email: ${managerEmail} </li>
            <li class="list-group-item">Office Number: ${engineerGithub} </li>
        </ul>
    </div>
</card>`
}

//can make helper functions for dealing with each kind of employee object (manager, engineer, intern)