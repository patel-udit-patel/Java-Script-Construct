const ps = require("prompt-sync");
const prompt = ps();

let day = prompt("Enter the day : ");
let month = prompt("Enter the month : ")

day = parseInt(day)
month = parseInt(month)


console.log(day,month)


// Validate parsed values
if (isNaN(day) || isNaN(month) || month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid day or month. Please enter valid numbers.");
    process.exit(1);
}

// Define the valid date range (March 20 - June 20)
let isValid = (month === 3 && day >= 20) || 
              (month === 4) || 
              (month === 5) || 
              (month === 6 && day <= 20);

// Print result
console.log(isValid);
