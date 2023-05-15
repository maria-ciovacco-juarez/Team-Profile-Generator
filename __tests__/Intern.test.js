const Intern = require("../lib/Intern")

test("Check if intern is an object", () =>{
  const newIntern = new Intern ()
  expect (typeof(newIntern)).toBe("object")
})

test ("Check if the name is saved correctly", () => {
  const newIntern = new Intern ("Inez")
  expect (newIntern.name).toBe("Inez")

  
})