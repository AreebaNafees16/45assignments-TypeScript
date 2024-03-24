function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Modify the array of magicians
magicians = make_great(magicians);

// Call the function to show magician's names
show_magicians(magicians);


