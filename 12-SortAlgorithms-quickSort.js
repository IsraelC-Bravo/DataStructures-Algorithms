//Instructions
//Given an array of integers, sort the array.

//arr of integers, no letters, neg and pos nums. no floats.
//return sorted array using the quickSort algorithm

//Example
//quickSort([-6, 20, 8, -2, 4]), the result should be [-6, -2, 4, 8, 20].

//Quick Sort Idea
//1. Identify/Pick the "pivot" element:
//-Pick first element
//-Pick last element (our approach)
//-Pick a random element
//-Pick a median as pivot
//2. Put everything that is smaller than the pivot to a left array and everything that is greater than the pivot to a right array
//3. Repeat the process for the individual "left" and "right" arryas until you have an array of length 1.
//4. Repeatedly concatenate the left array, pivot and right array until one sorted array remains.

//Solution /
//Worst Case Complexity => Big-O = O(2^n) Quadratic Complexity
//Average Case Complexity => O(nlogn)
function quickSort(arr) {
  //check if arr.lenght > 1, if not, return arr
  if (arr.length <= 1) {
    return arr;
  }
  //create a pivot variable, left and right arrs.
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  //loop through arr
  for (let i = 0; i < arr.length - 1; i++) {
    //push left or right arrs based on if arr[i] < pivot
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  //return [...quickSort(left), pivot, ...quickSort(right)]
}

//test code
console.log(quickSort([-6, 20, 8, -2, 4])); //[-6, -2, 4, 8, 20]
console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
); //[1, 2, 2, 4, 43, 43, 55, 123, 123, 234, 345, 63, 92, 5643, 123]
