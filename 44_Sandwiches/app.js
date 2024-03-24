"use strict";
function make_sandwich(...items) {
    console.log("Sandwich ordered with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Swiss cheese", "Spinach");
make_sandwich("Peanut Butter", "Mustard");
