//importing Employee constructor
const Employee = require('./Employee');

//manager constructor extension of employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //prompting employee constructor
        super (name, id, email);

        this.officeNumber =officeNumber;
    }

    //override employee role to manager
    getRole () {
        return "Manager";
    }
}

//exported 
module.exports = Manager;