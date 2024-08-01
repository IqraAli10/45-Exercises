// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
// Define an array of magician names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Define a function to show the magicians' names
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Define a function to add "the Great" to each magician's name
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Modify the array of magicians
make_great(magicians);
// Call the function to show the modified list of magicians
show_magicians(magicians);
export {};
