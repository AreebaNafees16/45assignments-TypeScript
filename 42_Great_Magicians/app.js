"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Array of magician's names
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the array of magicians
magicians = make_great(magicians);
// Call the function to show magician's names
show_magicians(magicians);
