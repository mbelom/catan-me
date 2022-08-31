//employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }

    //returning name from input 
    getName () {
        return this.name;
    }

    //returning ID from input 
    getID () {
        return this.id;
    }

    //returning email from input 
    getEmail () {
        return this.email;
    }

    //returning employee type
    getRole () {
        return 'Employee'
    }

};

//exported 
module.exports = Employee;