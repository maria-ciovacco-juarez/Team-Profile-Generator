const Engineer = require("../lib/Engineer")

test("Check if engineer is an object", () =>{
  const newEngineer = new Engineer ()
  expect (typeof(newEngineer)).toBe("object")
})

test ("Check if the name is saved correctly", () => {
  const newEngineer = new Engineer ("James")
  expect (newEngineer.name).toBe("James")

  
})