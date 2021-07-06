//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Manager extends Employee {
    //intern constructor with the features an intern needs.
    //this constructor will be called when creating an engineer
    //instance.
    constructor(name, id, email, officeNumber){
        //to access the superclass (Employee) constructor and methods, use super().
        //Must call super constructor in derived class before accessing 
        //'this' or returning from derived constructor at new Manager to avoid
        //the error: ReferecenError.
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //only the get methods for Manager and officeNumber are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the Manager. 
    //get methods to access instance the role Manager and officeNumber.
    getRole() {
        return "Manager";

    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
}

//export the class Manager for use elsewhere in our programs.
module.exports = Manager;