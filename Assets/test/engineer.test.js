const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');

describe ("Engineer", () => {
    const engineer = new Engineer("John", 1, "test@test.com", "the-schwiz");;
    
    test("Engineer constructor works correctly", () => {
        expect(engineer.name).toBe("John");
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe("test@test.com");
        expect(engineer.github).toBe("the-schwiz");
    });

    test("getGithub method returns the github username", () => {
        expect(engineer.getGithub()).toBe("the-schwiz");
    });

    test("getRole method returns the role", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });

    test("createEnigneer method works correctly", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({
            engineerName: "Max",
            engineerId: 2,
            engineerEmail: "test123@test.com",
            engineerGithub: "github_account_123"
        });

        const newEngineer = await Engineer.createEngineer();
        expect(newEngineer.name).toBe("Max");
        expect(newEngineer.id).toBe(2);
        expect(newEngineer.email).toBe("test123@test.com");
        expect(newEngineer.github).toBe("github_account_123");
    });
});

