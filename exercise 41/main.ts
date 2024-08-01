// Magicians: Make a array of magician’s names. Pass the array to a
// function called show_magicians(), which prints the name of each magician in the array.

// Define an array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Define a function to show the magicians' names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call the function and pass the array of magicians
show_magicians(magicians);
