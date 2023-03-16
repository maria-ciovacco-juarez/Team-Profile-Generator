const Employee = require("./employee")

// Engineer will extend Employee
class Engineer extends Employee {

  constructor({ name, id, email, github }) {
    super({ name, email, id });
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;