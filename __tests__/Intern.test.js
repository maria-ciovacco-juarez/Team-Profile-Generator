const Intern = require("../lib/Intern")

//test to pass intern
describe('Intern', () => {

  describe('intern school', () => {
    it('A school name should populate if a new intern is added to the team', () => {
      const testSchool = "UNT";
      const intern = new Intern("Betty", 1, "betty@email.com", testSchool);
      expect(intern.school).toEqual(testSchool);
    });
  });
});
