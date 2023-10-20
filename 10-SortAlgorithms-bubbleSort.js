//Instructions
//Given an array of integers, sort the array.

//arr of integers, can be empty, negative and positive nums. No letters for now.
//return a sorted array using bubble sort algorithm.

//Bubble Sort
//Compare adjacent elements in the array and swap the positions if they are not in the intended order.
//Repeat the instruction as you step through each element in the array
//Once you step through the whole array with no swaps, the array is sorted.

//Examples
//[-6, 20, 8, -2, 4] => [-6, -2, 4, 6, 20]

//Solution / Big-O = O(n^2) Quadratic Complexity
function bubbleSort(arr) {
  //create variable to keep track of swaps
  let swapped;
  //use do while to at least run the code once
  do {
    //set swapped to false to reset each loop
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //compare adjacent items
      if (arr[i] > arr[i + 1]) {
        //create a temp variable to swap values
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //if there was a change, change swapped to true
        swapped = true;
      }
    }
    //keep repeating the loop until there was no swap
  } while (swapped);
}

//since there is no return value, create an array
const arr = [20, 8, -6, 4, -2];
//call the function
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
