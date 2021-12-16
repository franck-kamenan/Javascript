// Arithmetic
document.writeln(20 + 10 + "<br/>");
document.writeln(20 - 10 + "<br/>");
document.writeln(20 * 10 + "<br/>");
document.writeln(20 / 10 + "<br/>");
document.writeln(20 % 10 + "<br/>");

var a = 5;
a++;
document.writeln(a + "<br/>");
++a;
document.writeln(a + "<br/>");
a--;
document.writeln(a + "<br/>");
--a;
document.writeln(a + "<br/>");

// Comparison
document.writeln(20 == 10); // Equal
document.writeln("<br/>");
document.writeln(10 == 10); // Equal
document.writeln("<br/>");
document.writeln(20 === 10); // Identical( equal and of same type)
document.writeln("<br/>");
document.writeln(10 === 10); // Identical( equal and of same type)
document.writeln("<br/>");
document.writeln(20 != 10);
document.writeln("<br/>");
document.writeln(20 !== 10);
document.writeln("<br/>");
document.writeln(20 > 10);
document.writeln("<br/>");
document.writeln(20 >= 10);
document.writeln("<br/>");
document.writeln(20 < 10);
document.writeln("<br/>");
document.writeln(20 <= 10);
document.writeln("<br/>");

// Bitwise

// Logical
document.writeln(20 >= 10 && 10 < 20); // And
document.writeln("<br/>");
document.writeln(20 < 10 || 20 > 10); // Or
document.writeln("<br/>");
document.writeln(!(20 <= 10)); // Not
document.writeln("<br/>");

// Assignement
var b = 5; // Assign
document.writeln(b + "<br/>");
b += 6; // Add and assign
document.writeln(b + "<br/>");
b -= 7; // Subtract and assign
document.writeln(b + "<br/>");
b *= 8; // Multiply and assign
document.writeln(b + "<br/>");
b /= 4; // Divide and assign
document.writeln(b + "<br/>");
b %= 3 // Modulus and assign
document.writeln(b + "<br/>");

// Conditional(?:)