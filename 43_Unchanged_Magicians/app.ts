function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let originalMagicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Create a copy of the original array
let modifiedMagicians: string[] = [...originalMagicians];

// Modify the copied array
modifiedMagicians = make_great(modifiedMagicians);

// Call the function to show magician's names for both original and modified arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);