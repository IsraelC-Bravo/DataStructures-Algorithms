//Instructions
//Given a sorted array of "n" elements and a target "t", find the index of "t" in the array. Return -1 if the target is not found.

//NOTE: Binary search will only work on "sorted" arrays. If not sorted we can use Linear Search, or first sort the array, then use Binary Search.

//What is Binary Search?
//There are 4 steps to follow in order to do a Binary Search:
//1. If the arr is empty => -1
//2. If arr has elements, find the middle element. If target === middle element => index of middle element
//3. If target is < middle element, binary search the left half of arr.
//4. If target is > middle element, binary search the right half of arr.
//* If there are only 2 elements on either side, the first element is the middle element.

//PREP WORK
//array of nums, sorted!, no empty arrs. Target "t", num to locate.
//return the index of target || -1

//Examples
//[-5, 2, 4, 6, 10], 10 => 4
//[-5, 2, 4, 6, 10], 6 => 3
//[-5, 2, 4, 6, 10], 20 => -1

//Solution / Big-O = O(logn)
function binarySearch(arr, target) {
  //find both ends of arr
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  //use a while loop to find middle index as long as index is > 0
  while (leftIndex <= rightIndex) {
    //first find the middle index
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    //return the index if middle index === target
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    //If not, search the arr (left or right)
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

//test cases
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
