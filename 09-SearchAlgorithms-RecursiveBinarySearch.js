//Instructions
//Given a sorted array of "n" elements and a target "t", find the index of "t" in the array. Return -1 if the target is not found.

//reminder on Recursion
//Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.
//Recursion is when a function calls itself.

//PREP WORK
//array of nums, sorted!, no empty arrs. Target "t", num to locate.
//return the index of target || -1

//Examples
//[-5, 2, 4, 6, 10], 10 => 4
//[-5, 2, 4, 6, 10], 6 => 3
//[-5, 2, 4, 6, 10], 20 => -1

//Solution / Big-O = O(logn)
function recursiveBinary(arr, target) {
  //helper function for recursion
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  //base case 1
  if (leftIndex > rightIndex) {
    return -1;
  }
  //base case 2
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  //search either side
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

//test code
console.log(recursiveBinary([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinary([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20)); // -1
