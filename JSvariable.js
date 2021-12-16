// Global variables.
var x = 10;
var _valeur = "sonoo";
var _y = 20;
var z = x + _y;

document.write(z);

function abc() {

    // Local variable.
    var d = 40;
}

function local() {

    // Local variable.
    var x = 13;
    document.write(x);
    // Global variable, accessible.
    document.write(_valeur);
    // Local variable, pas accessible.
    document.write(d);
}

function xyz() {

    // Declaring a global variable within a function.
    window.value = 90;
}

function test() {

    document.writeln(_y);
    // marche pas
    document.writeln(window.value);
}