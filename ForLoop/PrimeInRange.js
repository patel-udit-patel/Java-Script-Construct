const prompt = require('prompt-sync')();

let start = parseInt(prompt("Enter the start of range: "));
let end = parseInt(prompt("Enter the end of range: "));

console.log(`Prime numbers between ${start} and ${end} are:`);

for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) continue;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}