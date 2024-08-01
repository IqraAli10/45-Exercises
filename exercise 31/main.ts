// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// List of usernames
let usernames: string[] = ['Alice', 'Bob', 'Charlie'];

// Function to check if the list is empty
function checkUsernames(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    } else {
        for (let username of usernames) {
            console.log(`Hello, ${username}!`);
        }
    }
}

// Checking the list initially
checkUsernames(usernames);

// Removing all usernames
usernames = [];

// Checking the list again
checkUsernames(usernames);
