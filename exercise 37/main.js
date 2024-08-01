// Define the make_shirt function with default parameters
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('Medium');
// Call the function to make a shirt of any size with a different message
make_shirt('Small', 'Coding is fun!');
export {};
