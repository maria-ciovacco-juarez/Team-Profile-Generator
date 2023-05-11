const Employee = require("../lib/employee")

test("Check if employee is an object", () =>{
  const newEmployee = new Employee ()
  expect (typeof(newEmployee)).toBe("object")
})

test ("Check if the name is saved correctly", () => {
  const newEmployee = new Employee ("Matt")
  expect (newEmployee.name).toBe("Matt")

  
})