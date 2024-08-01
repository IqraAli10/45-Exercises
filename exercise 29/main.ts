// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement,
//  such as You really like bananas!


let favorite_fruits: string[] = ["apple","banana", "strawberry", "orange","grape"]
// Check for apple
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

// Check for banana
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

// Check for strawberry
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

// Check for orange
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

// Check for grape
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}
