"use strict";
// Tests for equality and inequality with strings
console.log("equality and inequality tests");
console.log("apple" === "apple"); // True
console.log("banana" !== "banana"); // False
//Tests using the lower case function
console.log("lower case function tests");
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("World".toLowerCase() === "WORLD"); // False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests");
let num1 = 6;
let num2 = 12;
console.log(num1 === 6); // True
console.log(num2 !== 12); // False
console.log(num1 > 4); // True
console.log(num2 < 5); // False
console.log(num1 >= 5); // True
console.log(num2 <= 7); // False
//Tests using "and" and "or" operators
console.log("AND and OR operators tests");
let condition1 = 5 === 5; // true
let condition2 = 5 >= 10; // false
console.log(condition1 && condition2); // flase
console.log(condition1 || condition2); // true
// Test whether an item is in an array
console.log("Item is in an array");
let evenNumber = [2, 4, 6, 8, 10];
console.log(evenNumber.includes(4)); // True
console.log(evenNumber.includes(3)); // False
// Test whether an item is not in an array
console.log("Item is not in an array");
console.log(!evenNumber.includes(7)); // True
console.log(!evenNumber.includes(10)); // False
