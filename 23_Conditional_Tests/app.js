"use strict";
//Write a series of conditional tests
// Define a car variable
let car = 'subaru';
// Tests evaluate to True
// Test No 01
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test No 02
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test No 03
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test No 04
console.log("Is car.length <= 6? I predict True.");
console.log(car.length <= 6);
//Test No 05
// Check if car's brand is not 'Honda'
console.log("Is the car brand not 'Honda'?");
let isNotHonda = !(car === 'Honda');
console.log(isNotHonda);
//Test No 06
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');
//Test No 07
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
//Test No 08
console.log("Does car start with 'a'? I predict False.");
console.log(car.startsWith('a'));
//Test No 09
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//Test No 10
console.log("Is car.length > 7 ? I predict False.");
console.log(car.length > 7);
