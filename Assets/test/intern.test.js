const Intern = require('../lib/intern');
const inquirer = require('inquirer');

describe ("Intern", () => {
    const intern = new Intern("Dave", 2, "test@test.com", "McGill");;


    
    test("Intern constructor works correctly", () => {
        expect(intern.name).toBe("Dave");
        expect(intern.id).toBe(2);
        expect(intern.email).toBe("test@test.com");
        expect(intern.school).toBe("McGill");
    });

    test("getSchool method returns the intern's school", () => {
        expect(intern.getSchool()).toBe("McGill");
    });

    test("getRole method returns the role", () => {
        expect(intern.getRole()).toBe("Intern");
    });

    test("createIntern method works correctly", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({
            internName: "Dave",
            internId: 2,
            internEmail: "test@test.com",
            internSchool: "McGill"
        });

        const newIntern = await Intern.createIntern();
        expect(newIntern.name).toBe("Dave");
        expect(newIntern.id).toBe(2);
        expect(newIntern.email).toBe("test@test.com");
        expect(newIntern.school).toBe("McGill");
    });
});