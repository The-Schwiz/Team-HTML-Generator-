const Manager = require('../lib/manager');
const inquirer = require('inquirer');

describe ("Manager", () => {
    const manager = new Manager("Chris", 3, "test@test.com", "123-456-789");
    
    test("Manager constructor works correctly", () => {
        expect(manager.name).toBe("Chris");
        expect(manager.id).toBe(3);
        expect(manager.email).toBe("test@test.com");
        expect(manager.officeNumber).toBe("123-456-789");
    });

    test("getRole method returns the role", () => {
        expect(manager.getRole()).toBe("Manager");
    });

    test("createManager method works correctly", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({
           managerName: "Chris",
           managerId: 3,
           managerEmail: "test@test.com",
           managerNumber: "123-456-789"
        });

        const newManager = await Manager.createManager();
        expect(newManager.name).toBe("Chris");
        expect(newManager.id).toBe(3);
        expect(newManager.email).toBe("test@test.com");
        expect(newManager.officeNumber).toBe("123-456-789");
    });
});