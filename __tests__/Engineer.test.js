const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

  describe('Github Account', () => {
    it('A Github account should populate if a new engineer is added to the directory', () => {
      const teamGithub = "james_github";
      const engineer = new Engineer("James", 1, "James@email.com", teamGithub);
      expect(engineer.teamGithub).toEqual(teamGithub);
    });
  });
});
