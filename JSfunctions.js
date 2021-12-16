// Function without argument
function msg() {

    document.writeln("This is a function.");
}

// Function with argument
function getCube(number) {

    document.writeln(number * number * number);
}

// Function with multiple arguments
function addition(a, b) {

    document.writeln(a + b);
}

// Function with return value
function returnValue() {

    return "This is a function with a return value.";
}

// Function object
var add = new Function("x", "y", "return x + y");
var heroes = new Function("x", "y", "return x + ' is stronger than ' + y");
