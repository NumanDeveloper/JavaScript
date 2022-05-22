// This is a random number generator
/*
 * Math.floor() --> returns the real part and ignores the decimal part ie, returns 5 if 5.7
 * Math.ceil() --> returns the real part by adding one in it, regardless of decimal value ie, returns 6 if 5.7 or 5.3
 */

// * Generating a random number between 1 and 5 using floor() and ceil()
let a = Math.floor(Math.random() * 5 + 1);
let b = Math.ceil(Math.random() * 5);

console.log(a, b)

// Just for testing and better understanding
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))