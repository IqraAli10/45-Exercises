// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";
let str3: string = "hello";

console.log(str1 === str3);  // True
console.log(str1 !== str2);  // True
console.log(str1 === str2);  // False
console.log(str2 !== str3);  // True



// Tests using the lower case function
let upperCaseStr: string = "HELLO";
let mixedCaseStr: string = "HeLLo";
let lowerCaseStr: string = "hello";

console.log(upperCaseStr.toLowerCase() === lowerCaseStr);  // True
console.log(mixedCaseStr.toLowerCase() === lowerCaseStr);  // True
console.log(upperCaseStr.toLowerCase() === upperCaseStr);  // False


// Numerical tests involving equality and inequality
let num1: number = 10;
let num2: number = 20;
let num3: number = 10;

console.log(num1 === num3);  // True
console.log(num1 !== num2);  // True
console.log(num1 > num2);    // False
console.log(num1 < num2);    // True
console.log(num1 >= num3);   // True
console.log(num2 <= num3);   // False


// Tests using "and" and "or" operators
let a: boolean = true;
let b: boolean = false;
let c: boolean = true;

console.log(a && c);  // True
console.log(a && b);  // False
console.log(a || b);  // True
console.log(b || b);  // False




// Test whether an item is in an array
let arr: number[] = [1, 2, 3, 4, 5];
let item1: number = 3;
let item2: number = 6;

console.log(arr.includes(item1));  // True
console.log(arr.includes(item2));  // False




// Test whether an item is not in an array
let fruits: string[] = ["apple", "banana", "orange"];
let fruit1: string = "grape";
let fruit2: string = "banana";

console.log(!fruits.includes(fruit1));  // True
console.log(!fruits.includes(fruit2));  // False
