// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'


// Employee class
class Employee {
  constructor ({name, id, email, role}){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
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

