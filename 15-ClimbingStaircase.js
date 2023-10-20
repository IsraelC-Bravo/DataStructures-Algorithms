//Instructions
//Given a staircase of "n" steps, count the number of ways to climb to the top. You can either climb 1 step or 2 steps at a time.

//examples
//n = 1, climbingStaircase(1) => 1 | (1)
//n = 2, climbingStaircase(2) => 2 | (1, 1), (2)
//n = 3, climbingStaircase(3) => 3 | (1, 1, 1), (1, 2), (2, 1)
//n = 4, climbingStaircase(4) => 5 | (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1), (2, 2)

//"n", positive integer >= 1, no "0", no letters, no symbls.
//return a list of all possible ways to sum "n" to get to the top.

//Climbing Staircase Idea:
//At any given time, you can climb either 1 or 2 steps
//If you have to climb from step "n", we can only climb from step "n - 1" or "n - 2".
//Calculate the ways we can climb to "n - 1" and "n - 2" and add the two
//climbingStaircase(n) = climbingStairCase(n - 1) + climbingStaircase(n - 2)

//Solution 1 (Recursion) / Big-O = O(n) Linear Complexity
function climbingStaircase(n) {
  //Create a condition that meets numbers <= 2, for nmr of ways to climb.
  if (n <= 2) {
    return n;
  }
  //Use formula to find the number of ways to climb
  return climbingStaircase(n - 2) + climbingStaircase(n - 1);
}

//Solution 2 / Big-O = O(n)
function climbingStaircase(n) {
  //create an arr for number of ways to climb
  let numOfWays = [1, 2]; //we know 1, 2
  //loop at index 2 - "n"
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 2] + numOfWays[i - 1];
  }
  //match index
  return numOfWays[n - 1];
}

//test cases
console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
console.log(climbingStaircase(5)); // 8
