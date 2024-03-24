// List of users
let users: string[] = ["Jos", "Alice", "Bobby", "Sammy", "Sofia"];

// Check if the list of users is not empty
if (users.length > 0) {
    // Loop through the list of users and remove each username
    while (users.length > 0) {
        users.pop();
    }
    console.log("All usernames have been removed.");
} else {
    console.log("We need to find some users!");
}