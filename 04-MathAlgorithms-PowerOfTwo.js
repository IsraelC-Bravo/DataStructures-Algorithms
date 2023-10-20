//Instructions
//Given a positive integer "n", determine if the number is a power of 2 or not. An integer is a power of two if there exists an integer "x" such as "n" === 2x

//n => positive integer. No letters, no empty params, no symbls.
//return true or false

//Examples
//isPowerOfTwo(1) = true -> (2pow0)
//isPowerOfTwo(2) = true -> (2pow1)
//isPowerOfTwo(5) = false

//Solution 1 / Big-O = O(n) => Linear complexity
function isPowerOfTwo(n) {
  //check if any number between 0 and "n" is the result of n = 2 to power of x.
  for (let i = 0; i < n; i++) {
    if (n === Math.pow(2, i)) {
      return true;
    }
  }
  return false;
}

//Solution 2 / Big-O = O(logn) => Logarithmic complexity
function isPowerOfTwo(n) {
  //check if n < 1, return false
  if (n < 1) {
    return false;
  }
  //use a while loop to divide numbers by half until it reaches 1
  while (n > 1) {
    //check if n % 2 !== 0 to return false
    if (n % 2 !== 0) {
      return false;
    }
    //If num is % 2, divide it by half
    n /= 2;
  }
  return true;
}

//Solution 3 / Big-O = O(1) => Constant complexity, using BitWise & operator
function isPowerOfTwoBitWise(n) {
  //check if n < 1, return false
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

//test code 1
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(9)); // false

console.log("---"); // just to separate results

//test code 2
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(8)); // true
console.log(isPowerOfTwoBitWise(9)); // false
