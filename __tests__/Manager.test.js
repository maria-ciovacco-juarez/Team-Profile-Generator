const Manager = require("../lib/Manager");

//test to pass for manager
describe('Manager', () => {

  describe('manager office number', () => {
    it('Managers office number should populate if a manager is added to the team', () => {
      const testOfficeNumber = "13";
      const manager = new Manager("Augustine", 1, "augustine@email.com", testOfficeNumber);
      expect(manager.officeNumber).toEqual(testOfficeNumber);
    });
  });
});