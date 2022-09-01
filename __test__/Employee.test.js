// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Marissa', 90, 'mbelombre@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Marissa', 73, 'mbelombre@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


// receives emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Marissa', 73, 'mbelombre@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// receives role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Marissa', 73, 'mbelombre@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 