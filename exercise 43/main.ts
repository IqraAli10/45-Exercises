// Define an array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Define a function to show the magicians' names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define a function to add "the Great" to each magician's name
// without modifying the original array
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return great_magicians;
}

// Create a new array with "the Great" added to each magician's name
let great_magicians = make_great([...magicians]);

// Call the function to show the original list of magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
