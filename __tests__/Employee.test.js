const Employee = require("../lib/Employee")

test("Check if employee is an object", () =>{
  const newEmployee = new Employee ()
  expect (typeof(newEmployee)).toBe("object")
})

test ("Check if the name is saved correctly", () => {
  const newEmployee = new Employee ("Betty")
  expect (newEmployee.name).toBe("Betty")

  
})