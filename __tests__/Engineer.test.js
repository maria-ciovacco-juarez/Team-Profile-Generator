const Engineer = require("../lib/Engineer");

test("Check if engineer is an object", () =>{
  const newEngineer = new Engineer ()
  expect (typeof(newEngineer)).toBe("object")
})

test ("Check if the name is saved correctly", () => {
  const newEngineer = new Engineer ("James")
  expect (newEngineer.name).toBe("James")
})

test ("Check if the email is correct", () => {
  const newEmail = new Engineer ("james@work.com") 
  expect (newEmail.email).toBe("james@work.com")
})

test ("Check if Github is correct", () => {
  const newEngineer = new Engineer ("james_github")
  expect (newEngineer.github).toBe("james_github")
})
