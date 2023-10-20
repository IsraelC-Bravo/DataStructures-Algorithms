//Tower of Hanoi Puzzle
//The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
//Only 1 disk may be moved at a time
//Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod. And lastly,
//No disk may be placed on top of a smaller disk.

//Tower of Hanoi Logic (Pseudo Code)
//Rule 1: shift "n-1" disks from "A" to "B", using "C" when required.
//Rule 2: shift last disk from "A" to "C"
//Rule 3: shift "n-1" disks from "B" to "C", using "A" when required.

//prep work
//"n", integer for the number of disks, "fromRod", where the disks are located, "toRod" the destination, "usingRod", helper to move disks around. n is always >= 1, rods always = 3.
//console.log the number of steps with description on how to solve it.

//Solution - Big-O = O(2^n) Quadratic Time Complexity because as the number of "n" increases, the number of statements to execute is 2^n - 1
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  //base case to stop recursion (only 1 disk)
  if (n === 1) {
    //Rule 2: shift last disk from "A" to "C"
    console.log(`Move disk 1 ${fromRod} to ${toRod}.`);
    return; // this recalls the function
  }
  //recursively call towerOfHanoi to move disks around following the rules
  //Rule 1: shift "n-1" disks from "A" to "B", using "C" when required.
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}.`);
  //Rule 3: shift "n-1" disks from "B" to "C", using "A" when required.
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

//test code
towerOfHanoi(1, "A", "C", "B");
console.log("---");
towerOfHanoi(2, "A", "C", "B");
console.log("---");
towerOfHanoi(3, "A", "C", "B");
console.log("---");
towerOfHanoi(4, "A", "C", "B");
