"use strict";
// Version running the if block
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// Version running the else block
let alien_color_2 = 'red';
if (alien_color_2 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points."); // This block will be executed because the condition is not match
}
