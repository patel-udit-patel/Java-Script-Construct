// Get command-line argument (year)
const ps = require("prompt-sync");
const prompt = ps();
let year = prompt("Enter 4 digit year :");

// Check if it's a valid 4-digit number
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
} else {
    console.log("Please enter a valid 4-digit year.");
}