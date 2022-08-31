//importing Employee constructor 
const Employee =require("./Employee");

//engineer constructor extension of employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //prompting employee constructor
        super (name, id, email);

        this.github =github;
    }
        //returning github input
        getGithub () {
            return this.github;
        }

        //override employee role to engineer
        getRole() {
            return "Engineer";
        }
}

//exported
module.exports = Engineer;