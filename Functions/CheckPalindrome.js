// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}


console.log(arePalindromes(121, 232)); // true
console.log(arePalindromes(123, 456)); // false