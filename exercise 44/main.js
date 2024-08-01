// Define a function that accepts a variable number of items for a sandwich
function order_sandwich(...items) {
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich!");
    }
    else {
        items.forEach(item => {
            console.log(` - ${item}`);
        });
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
order_sandwich("Turkey", "Bacon", "Avocado");
order_sandwich("Peanut Butter", "Jelly");
export {};
