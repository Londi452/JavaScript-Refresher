// Exercise 1: Variable Declaration
// 1. Declare a variable ‘name’ and assign your name to it.
var name = "Gilbert";

// 2. Declare a variable ‘age’ and assign your age to it.
var age = 25; // Just an example age.

// 3. Declare a variable ‘isStudent’ and assign it to a boolean value indicating whether you are a student or not.
var isStudent = true; // Example: I'm not a student.

// 4. Print all three variables.
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Exercise 2: Variable Reassignment
// 1. Declare a variable ‘favoriteColour’ and assign your favourite colour to it.
var favoriteColour = "blue";

// 2. Print the value of favoriteColour.
console.log("Favorite Colour:", favoriteColour);

// 3. Reassign favoriteColour to a different colour.
favoriteColour = "green";

// 4. Print the new value of favoriteColour.
console.log("New Favorite Colour:", favoriteColour);

// Exercise 3: Arithmetic Operations
// 1. Declare two variables ‘num1’ and ‘num2’ and assign them any two numbers.
var num1 = 10;
var num2 = 5;

// 2. Declare variables to store the sum, difference, product, and quotient of num1 and num2.
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

// 3. Print the results of these arithmetic operations.
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Exercise 4: Numbers and Operators
// 1. Declare a number variable and assign it a value.
var number1 = 20;

// 2. Declare a number variable and assign it a floating number.
var number2 = 3.5;

// 3. Perform addition, subtraction, multiplication, division, modulus, and exponentiation with number variables.
var addition = number1 + number2;
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;
var exponentiation = Math.pow(number1, number2); // Using Math.pow for exponentiation

// 4. Print all your variables.
console.log("Number 1:", number1);
console.log("Number 2:", number2);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Exercise 5: Boolean and Operators
// 1. Use comparison operators to compare two numbers and store the results in boolean variables.
var comparison1 = 8 > 12;
var comparison2 = 8 < 12;
var comparison3 = 8 === 12;
var comparison4 = 8 !== 12;

// 2. Declare two variables x and y with the values 8 and 12 respectively.
var x = 8;
var y = 12;

// Check and print the following:
console.log("Is x greater than y?", x > y);
console.log("Is x less than or equal to y?", x <= y);
console.log("Is x equal to y?", x === y);
console.log("Is x not equal to y?", x !== y);

// 3. Declare the variables a and b with values true and false.
var a = true;
var b = false;

// Determine and print the result of the following logical operations:
console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. Declare variable p and assign it a value of 10.
var p = 10;

// Use the following assignment operators to modify the value of p with any number and print the result each time:
p += 5; // Equivalent to p = p + 5;
console.log("p after +=:", p);

p -= 3; // Equivalent to p = p - 3;
console.log("p after -=:", p);

p *= 2; // Equivalent to p = p * 2;
console.log("p after *=:", p);

p /= 4; // Equivalent to p = p / 4;
console.log("p after /=:", p);

p %= 3; // Equivalent to p = p % 3;
console.log("p after %=", p);
