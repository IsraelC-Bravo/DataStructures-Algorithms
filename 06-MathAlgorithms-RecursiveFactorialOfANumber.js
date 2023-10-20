//Instructions
//Given an integer "n", find the factorial of that integer.
//The factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n".
//Note: Factorial of 0 = 1

//examples
//factorial(4) => 4*3*2*1 = 24
//factorial(5) => 5*4*3*2*1 = 120

//"n" => positive integer >= 0. No neg nums, no letters, no symbls
//return the factorial of "n" using recursion

//Solution / Big-O = O(n) Linear complexity
function recursiveFactorial(n) {
  //base case-condition to end recursion
  // 0! = 1
  if (n === 0) {
    return 1;
  }
  // Factorial formula => n! = n * (n-1)!
  return n * recursiveFactorial(n - 1);
}

//test cases
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120
