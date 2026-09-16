// VARIABLES

const browserName = "chromium";
let testCount = 0;

console.log(browserName);

testCount = 5;
console.log(testCount);

// DATA TYPES

let userName = "Niroj";      // String
let age = 24;               // Number
let isStudent = true;       // Boolean
let marks = null;           // Null
let result;                 // Undefined

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof marks);
console.log(typeof result);

// ARITHMETIC OPERATORS


let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// COMPARISON OPERATORS

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 !== "10");


// LOGICAL OPERATORS

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isAdmin);

// DYNAMIC TYPING


let balance = 500000;

console.log(balance);
console.log(typeof balance);

balance = "five lakh";

console.log(balance);
console.log(typeof balance);


// STRING OPERATIONS

let firstName = "Niroj";
let lastName = "Thapa";

let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(fullName.length);

// TEMPLATE LITERALS


let city = "Lalitpur";

console.log(`My name is ${fullName}`);
console.log(`I live in ${city}`);

// BOOLEAN EXPRESSIONS


let score = 85;

console.log(score >= 40);
console.log(score < 40);

// CONST VS LET

const country = "Nepal";
console.log(country);

let count = 1;
count = 2;

console.log(count);

// NULL VS UNDEFINED

let phone = null;
let address;

console.log(phone);
console.log(address);


// TYPE CONVERSION

let num1 = "100";

console.log(Number(num1));
console.log(typeof Number(num1));

let num2 = 50;

console.log(String(num2));
console.log(typeof String(num2));

// NaN EXAMPLE

let amount = "hello";

console.log(Number(amount));
console.log(isNaN(Number(amount)));

// CONSOLE OUTPUT

console.log("Hello QA Automation!");
console.log("Node.js is working");
console.log("Day 1 completed successfully!");