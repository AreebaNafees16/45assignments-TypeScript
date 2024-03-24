"use strict";
// Passing version
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
// Failing version
let alien_color_2 = 'red';
if (alien_color_2 === 'green') {
    console.log("Player just earned 5 points."); // No output because the condition is not match
}
