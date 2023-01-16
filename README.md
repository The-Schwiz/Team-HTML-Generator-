# Team HTML Generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

## Use

Add the code folders to a local repo, run npm install in the CLI to install dependencies, then run node index.js in the CLI to see prompts and answer them. An HTML file will be generated with the user input. 

## Walkthrough Video: 

https://drive.google.com/file/d/1C62yMOmInt1i3TOUCbmJa_A8lSz2_3lF/view 

## Sample of HTML Generated: 

<!DOCTYPE html>
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
                <div class="row"><card class="card employee-card" data-employee-type="manager">
    <div class="card-header">
        <h2 class="card-title">Max</h2>
        <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:123 </li>
            <li class="list-group-item">Email: Test </li>
            <li class="list-group-item">Office Number: 123-456-789 </li>
        </ul>
    </div>
</card><card class="card employee-card" data-employee-type="engineer">
    <div class="card-header">
        <h2 class="card-title">David</h2>
        <h3 class="card-title">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:1234 </li>
            <li class="list-group-item">Email: Test </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/The-Schwiz">The-Schwiz</a></li>
        </ul>
    </div>
</card><card class="card employee-card" data-employee-type="intern">
    <div class="card-header">
        <h2 class="card-title">Indy</h2>
        <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:321 </li>
            <li class="list-group-item">Email: Test </li>
            <li class="list-group-item">School: None </li>
        </ul>
    </div>
</card><card class="card employee-card" data-employee-type="intern">
    <div class="card-header">
        <h2 class="card-title">Jake</h2>
        <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:455 </li>
            <li class="list-group-item">Email: Test </li>
            <li class="list-group-item">School: McGill </li>
        </ul>
    </div>
</card></div>
                </div>
            </body>
        </html>



