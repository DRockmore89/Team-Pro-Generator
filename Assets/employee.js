class Employee {
    //employee constructor with the features an employee needs.
    //this constructor will be called when creating an employee
    //instance such as en engineer and/or intern. 
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //get methods to access instance
    //variables id, name, and email.
    getName(){
        return this.name;
    }

    getId() {
        return this.id;

    }
    
    getEmail() {
        return this.email;

    }
}

//export the class Employee for use elsewhere in our programs.
module.exports = Employee;