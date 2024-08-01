// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.


// If-Else Chain for Alien Colors
let alien_color: string = 'green';  //can change this value to 'yellow' or 'red' to test different scenarios.

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");

}



// Alien color is green (passes the if condition)
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");  // This will be printed.
} else {
    console.log("Player just earned 10 points.");
}



// Alien color is red (fails the if condition)
let alien_color2: string = 'red';

if (alien_color2 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");  // This will be printed.
}
