const Manager = require("../lib/Manager");

test("Check if manager is an object", () =>{
    const newManager = new Manager ()
    expect (typeof(newManager)).toBe("object")
  })
  
  test ("Check if the name is saved correctly", () => {
    const newManager = new Manager("Matt")
    expect (newManager.name).toBe("Matt")
    
  })

// test("create an office number.", () => {
//     const testOfficeNumber = 2;
//     const employeeInstance = new Manager("manager", 2, "manager@work.com", testOfficeNumber);
//     expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
// });

// test("Testing officeNumber will return office number.", () => {
//     const testOfficeNumber = 2;
//     const employeeInstance = new Manager("manager", 2, "manager@work.com", testOfficeNumber);
//     expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
// });

// test("Testing role.", () => {
//     const returnValue = "Manager";
//     const employeeInstance = new Manager("manager", 2, "manager@work.com", 2);
//     expect(employeeInstance.getRole()).toBe(returnValue);
// });