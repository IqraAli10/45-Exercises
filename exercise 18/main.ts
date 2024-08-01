// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.


let favplaces: string[] =  ["Edinburg", "Amsterdem", "York", "Istanbul", "Cambridge"];
// printin original order
console.log("Original Order:", favplaces);

// Print array in alphabetical order
console.log("Alphabetical Order:", favplaces.slice().sort());

// array is still in its original order
console.log("Original Order:", favplaces);

// Print array in reverse alphabetical order
console.log("Reverse Alphabetical Order:", favplaces.slice().sort().reverse());

//array is still in its original order
console.log("Original Order:", favplaces);

// reverse the order of the list
favplaces.reverse()
console.log("Reverse order", favplaces);

// reverse the order again
favplaces.reverse()
console.log("Back to original order", favplaces);

// Sort array so it’s stored in alphabetical order
console.log("stored in alphabetical order:", favplaces.slice().sort());

// stored in reverse alphabetical order
console.log("sorted in reverse Alphabetical Order:", favplaces.slice().sort().reverse());





