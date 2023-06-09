const Employee = require("./Employee");

// Engineer will extend Employee
class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.teamGithub = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.teamGithub;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;