const Employee = require("../lib/Employee")

describe('Employee', () => {

  describe('new employee', () => {
    it('should create a new employee including name, email, and id once CLI prompts are completed', () => {
      const employee = new Employee("Inez", 1, "inez@email.com");
      expect(employee.Employee).toEqual();
    });
  });
});
