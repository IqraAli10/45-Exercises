// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version 1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("(Version 1) Player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("(Version 1) Player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("(Version 1) Player just earned 15 points.");
}
// Version 2
let alien_color1 = 'yellow';
if (alien_color1 === 'green') {
    console.log("(Version 2) Player just earned 5 points.");
}
else if (alien_color1 === 'yellow') {
    console.log("(Version 2) Player just earned 10 points.");
}
else if (alien_color1 === 'red') {
    console.log("(Version 2) Player just earned 15 points.");
}
// (Version 3)
let alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("(Version 3) Player just earned 5 points.");
}
else if (alien_color2 === 'yellow') {
    console.log("(Version 3) Player just earned 10 points.");
}
else if (alien_color2 === 'red') {
    console.log("(Version 3) Player just earned 15 points.");
}
export {};
