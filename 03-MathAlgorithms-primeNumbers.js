//Instructions
//Given a nat number "n", determine if the number is prime or not

//NOTE: a prime number is a natural number greater than 1 that is not the product of two smaller natural numbers.

//n -> number > 1, no letters, no symbls, no neg nums.
//return true of false

//examples
//isPrime(5) => true (1*5 or 5*1)
//isPrime(4) => false(1*4 or 2*2 or 4*1)

//Solution 1 / Big-O = O(n) =>  Linear complexity
function isPrime(n) {
  //check if "n" is smaller than 2
  if (n < 2) {
    return false;
  }
  //loop throuh 2 -> n and find if "n" is divisible by other nums
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//Solution 2 / Big-O = O(sqrt(n)) => Squared complexity?
//NOTE: In Math, if "n = a*b" and the square root of "n" is larger than "a" or "b", we don't have to check if the number is prime.
function isPrime(n) {
  //check if "n" is smaller than 2
  if (n < 2) {
    return false;
  }
  //compare 2 -> to sqr root of "n"
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//test code
console.log(isPrime(1), "false");
console.log(isPrime(4), "false");
console.log(isPrime(5), "true");
