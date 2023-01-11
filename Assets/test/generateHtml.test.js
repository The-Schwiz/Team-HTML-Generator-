const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');  
const Intern = require('../lib/intern');

const {
    generateEngineerHTMLStr,
    generateInternHTMLStr,
    generateManagerHTMLStr, 
    generateHTMLStr,
    writeHTMLFile
} = require('../lib/generateHTML');
const Employee = require('../lib/employee');



jest.mock('fs', () => ({
    writeFile: jest.fn().mockResolvedValue(),
}));

describe ("generateHtml", () => {

    test("generateEngineerHTMLstr function works correctly", () => {
        const engineer = new Engineer("John", 1, "test@test.com", "the-schwiz");
        const actualString = generateEngineerHTMLStr(engineer);
        const expectedString = `<card class="card employee-card" data-employee-type="engineer">
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
</card>`;
        expect(actualString).toBe(expectedString);
    });

    test("generateInternHTMLstr function works correctly", () => {
        const intern = new Intern("Dave", 2, "test@test.com", "McGill");
        const actualString = generateInternHTMLStr(intern);
        const expectedString = `<card class="card employee-card" data-employee-type="intern">
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
</card>`;
        expect(actualString).toBe(expectedString);
    });

    test("generateManagerHTMLstr function works correctly", () => {
        const manager = new Manager("Chris", 3, "test@test.com", "123-456-789");
        const actualString = generateManagerHTMLStr(manager);
        const expectedString = `<card class="card employee-card" data-employee-type="manager">
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
</card>`;
        expect(actualString).toBe(expectedString);

    });


    describe('generateHTMLStr Cases', () => {
        const manager = new Manager("Chris", 3, "test@test.com", "123-456-789");
        const intern = new Intern("Dave", 2, "test@test.com", "McGill");
        const engineer = new Engineer("John", 1, "test@test.com", "the-schwiz");

        test("generateHTMLStr works for manager employee", () => {
            const employees = [manager];
            const htmlStr = generateHTMLStr(employees);
            expect(htmlStr.includes('data-employee-type="manager"')).toBeTruthy();
        });
        test("generateHTMLStr works for enigneer employee", () => {
            const employees = [engineer];
            const htmlStr = generateHTMLStr(employees);
            expect(htmlStr.includes('data-employee-type="engineer"')).toBeTruthy();
        });
        test("generateHTMLStr works for intern employee", () => {
            const employees = [intern];
            const htmlStr = generateHTMLStr(employees);
            expect(htmlStr.includes('data-employee-type="intern"')).toBeTruthy();
        });
        test("generateHTMLStr throws error when invalid employee", () => {
            const invalidEmployee = new Employee('Test', '123', 'tet@email.com');
            const employees = [invalidEmployee];
            const t = () => {
                generateHTMLStr(employees);
            }
            expect(t).toThrowError();
        });
        test("generateHTMLStr works with multiple employees", () => {
            const employees = [manager, intern, engineer];
            const htmlStr = generateHTMLStr(employees);
            expect(htmlStr.includes('data-employee-type="manager"')).toBeTruthy();
            expect(htmlStr.includes('data-employee-type="intern"')).toBeTruthy();
            expect(htmlStr.includes('data-employee-type="engineer"')).toBeTruthy();
        })
    }); 

    test("writeHTMLFile function works correctly", () => {
        // call writeHTLFile
        const employees = [];

        const expectedHtmlStr = `<!DOCTYPE html>
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
                <div class="row"></div>
                </div>
            </body>
        </html>`;

        writeHTMLFile(employees);
        const fs = require('fs');
        expect(fs.writeFile).toHaveBeenCalled();
        expect(fs.writeFile).toHaveBeenCalledWith("index.html", expectedHtmlStr, expect.any(Function));
    });
});