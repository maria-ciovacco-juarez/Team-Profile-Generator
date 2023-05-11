// Employee class
class Employee {
  constructor (name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee"
  }

  // "get" method will retrieve user input
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return this.role;
  }
}

 // Export employee class and generate the HTML

 module.exports = Employee;

