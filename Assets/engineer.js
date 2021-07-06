//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Engineer extends Employee {
    //engineer constructor with the features an engineer needs.
    //this constructor will be called when creating an engineer
    //instance.
    constructor(id, name, email, github){
        //to access the superclass (Employee) constructor and methods, use super().
        //Must call super constructor in derived class before accessing 
        //'this' or returning from derived constructor at new Manager to avoid
        //the error: ReferecenError.
        super(id, name, email);
        this.github = github;
    }

    //only the get methods for Engineer and github are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the engineer. 
    //get methods to access instance the string Engineer and github.
    getRole() {
        return "Engineer";
    }
    
    getGithub(){
        return this.github;
    }
}

//export the class Engineer for use elsewhere in our programs.
module.exports = Engineer;