const Employee = require("../lib/employee");


describe("Employee", () => {
    const employee = new Employee("John", 1, "test@email.com");
       
    
    test("Should create instance correctly", () => {
        expect(employee.name).toBe("John");
        expect(employee.id).toBe(1);    
        expect(employee.email).toBe("test@email.com");
    });

    describe("Getters", () => {
        test("Should call getName method correctly", () => {
            expect(employee.getName()).toBe("John");
        });
        
        test("Should call getId method correctly", () => {
            expect(employee.getId()).toBe(1);
        });
        
        test("Should call getEmail method correctly", () => {
            expect(employee.getEmail()).toBe("test@email.com");
        });
        
        test("Should call getRole method correctly", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });
    
});
