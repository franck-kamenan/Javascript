// Object literal
emp = {

    id: 102,
    name: "Shyam Kumar",
    salary: 40000
}

// Object instance
var person = new Object();
person.id = 101;
person.name = "Ravi Malik";
person.salary = 50000;

// Object constructor
function who(id, name, salary) {

    this.id = id;
    this.name = name;
    this.salary = salary;
}

me = new who(103, "Vimal Jaiswal", 30000);

// Defining methods in object
function redman(id, name, salary) {

    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;
    function changeSalary(otherSalary) {

        this.salary = otherSalary;
    }
}

mc = new redman(104, "Sony Japan", 80000);

// Object methods

