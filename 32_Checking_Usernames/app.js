"use strict";
// Make a list of current users
let current_users = ["Azam", "Salman", "Ali", "Usman", "Haris"];
// Make a list of new users
let new_users = ["Ali", "Rizwan", "Zaman", "Azam", "Fakhar"];
// Convert all usernames to lowercase for case-insensitive comparison
current_users = current_users.map(user => user.toLowerCase());
// Loop through the new_users list
for (let new_user of new_users) {
    // Check if the lowercase version of the new username is in the lowercase version of current_users
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
        // Add the new username to the current_users list
        current_users.push(new_user.toLowerCase());
    }
}
