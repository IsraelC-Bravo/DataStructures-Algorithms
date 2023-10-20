//Instructions
//Given an array of integers, sort the array.

//arr of integers, positive and negatives. no letters, no symbls.
//return a sorted array using the Merge Sort Algorithm.

//Merge Sort Algorithm Idea
//1. Divide the array into sub arryas, each containing only one element. (An array of one element is considered sorted).
//2. Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. This will be the sorted array.

//Part 1: Divide all elements in the arr int sub arrays, until all arrays are of 1 length
function mergeSort(arr) {
  //check if there are more than 1 element in the array
  if (arr.length < 2) {
    return arr;
  }
  //find the middle of the arr
  const mid = Math.floor(arr.length / 2);
  //slice the left side of the arr
  const leftArr = arr.slice(0, mid);
  //slice the right side of the arr
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//Part 2: Compare and merge all arrays into 1
function merge(leftArr, rightArr) {
  //create a temp array to hold sorted elements
  const sortedArr = [];
  //loop while arrays are not empty
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      //push and remove el from original arr
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  //spread all items and merge them into 1 array.
  return [...sortedArr, ...leftArr, ...rightArr];
}

//Time complexity => Big-O = O(nlogn) Combination of Linear Complexity and Logarithmic complexity.
//This is one of the best complexities for sorting.

//test code
console.log(mergeSort([8, 20, -2, 4, -6])); // [-6, -2, 4, 8, 20]
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1,2,3,4,5,6,7,8,9,10]
console.log(mergeSort([100, -20, 40, -30, 16, -100, -101])); // [-100, -20, -101, -30, 16, 100, 40]
