"use strict";
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Iqra";
console.log("lowercase:", personName.toLocaleLowerCase());
console.log("uppecase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
