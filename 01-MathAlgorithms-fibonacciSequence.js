//Instruction
//Given a number "n", find the first "n" elements of the Fibonacci sequence.

//Note: A Fibonacci sequence is a sequence when each number is the sum of the two preceeding numbers.

//"n" -> number. no letters, no symbls, no negative numbers.
//return the first "n" elements of the fibonacci sequence.

//examples
//fibonacci(2) = [0, 1]
//fibonacci(3) = [0, 1, 1]
//fibonacci(5) = [0, 1, 1, 2, 3]
//fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

//Solution 1 / Big-O = O(n) => Linear complexity
function fibonacci(n) {
  //create a constant with first 2 nums [0, 1]
  const fib = [0, 1];
  //loop through "n" and add indexes from i = 2
  for (let i = 2; i < n; i++) {
    //sum of 2 previous nums
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

//test cases
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("test", () => {
    assert.deepEqual(fibonacci(2), [0, 1]);
    assert.deepEqual(fibonacci(3), [0, 1, 1]);
    assert.deepEqual(fibonacci(5), [0, 1, 1, 2, 3]);
    assert.deepEqual(fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
  });
});
