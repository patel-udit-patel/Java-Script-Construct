function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindromeNum = getPalindrome(num);
        if (isPrime(palindromeNum)) {
            console.log(`${num} is prime, and its palindrome ${palindromeNum} is also prime.`);
        } else {
            console.log(`${num} is prime, but its palindrome ${palindromeNum} is not prime.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}


checkPrimeAndPalindrome(13); // Example: Check prime and its palindrome
checkPrimeAndPalindrome(31); // Example: Check prime and its palindrome