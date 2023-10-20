//What is RECURSION?
//Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.
//Recursion is when a function calls itself.

//Why would we use it?
//A great technique to simplify your solution. If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.

//It needs to have a base case - a condition to terminate the recursion.
//Might simplify the solution, but it may not be the most optimal or faster solution. Sometimes a recursive solution may be far worse than a iterative solution.

//Instructions
//Given a number "n", find the nth element of the fibonacci sequence.
//NOTE: in math, the fibonacci sequence is a sequence in which each number is the sum of the two preceding nums.

//"n" => integer. "n" tell us the position of the nth element of the fibonacci sequence.
//return the nth element of the fibonacci sequence starting from 0

//Examples
//recursiveFibonacci(0) => 0 [0....]
//recursiveFibonacci(1) => 1 [0, 1....]
//recursiveFibonacci(6) => 8 [0, 1, 1, 2, 3, 5, 8, 13...]

//Solution / Big-O = O(2^n) Exponential complexity
function recursiveFibonacci(n) {
  //base case condition
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0 -> [0...]
console.log(recursiveFibonacci(1)); // 1 -> [0, 1...]
console.log(recursiveFibonacci(6)); // 8 -> [0, 1, 1, 2, 3, 5, 8, 13...]
