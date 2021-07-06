//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Intern extends Employee {
    //intern constructor with the features an intern needs.
    //this constructor will be called when creating an intern
    //instance.
    constructor(id, name, email, school){
        //to access the superclass (Employee) constructor and methods.
        //Must call super constructor in derived class before accessing 
        //'this' or returning from derived constructor at new Manager to avoid
        //the error: ReferecenError.
        super(id, name, email);
        this.school = school;
        
    }

    //only the get methods for Intern and school are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the Intern. 
    //get methods to access instance the role Intern and school.
    getRole() {
        return "Intern";

    }
    
    getSchool(){
        return this.school;
    }
}

//export the class Intern for use elsewhere in our programs.
module.exports = Intern;