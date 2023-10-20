//Instructions
//Give an integer "n", find the factorial of that integer.

//NOTE: In Mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers equal or less than "n"
//Factorial of Zero is 1

//n -> integer >= 0, no negative nums, no letters, no symbls.
//return the factorial of "n". If n = 0, then return 1

//examples
//factorial(4) => 4*3*2*1 = 24
//factorial(5) => 5*4*3*2*1 = 120

//Solution / Big-O = O(n) => Linear complexity
function factorial(n) {
  //create a fact variable to store the result
  let product = 1;
  //loop through 1 - n
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

//test code
const { assert, config } = require("chai");

describe("Basic Tests", () => {
  it("test", () => {
    assert.deepEqual(factorial(0), 1);
    assert.deepEqual(factorial(4), 24);
    assert.deepEqual(factorial(5), 120);
  });
});
