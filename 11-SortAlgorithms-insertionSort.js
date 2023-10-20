//Instructions
//Given an array of integers, sort the array.

//arr of integers, can be empty, negative and positive nums. No letters for now.
//return a sorted array using bubble sort algorithm.

//Insertion Sort
//Virtually split the arr into a sorted and an unsorted part.
//Assume that the first element is already sorted and the remaining elements are unsorted.
//Select an unsorted element and compare it to the sorted part.
//If the element in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift the larger element in the sorted part to the right.
//Insert the selected element at the right index.
//Repeat until all unsorted elements are placed in the right order.

//Examples
//[-6, 20, 8, -2, 4] => [-6, -2, 4, 6, 20]

//Solution / Big-O = O(2^n) Quadratic Complexity
function insertionSort(arr) {
  //Use a for loop to iterate through the "unsorted part" of the arr.
  for (let i = 1; i < arr.length; i++) {
    //store the number to insert in each iteration
    let numberToInsert = arr[i];
    //create a variable in the sorted part for comparison
    let j = i - 1;
    //compare the element in the sorted arr with the numbert to Insert
    while (j >= 0 && arr[j] > numberToInsert) {
      //find the index where the insertion has to happen
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    //insert the element to the right of that index
    arr[j + 1] = numberToInsert;
  }
}

//test code
const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr); // [-6, -2, -4, 8, 20]
