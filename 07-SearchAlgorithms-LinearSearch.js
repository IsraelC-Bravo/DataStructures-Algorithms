//Instructions
//Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.

//arr => numbers, no letters, no empty arr.
//return the index of "t" || -1 if not found

//Examples
//[-5, 2, 10, 4, 6], t = 10 => 2
//[-5, 2, 10, 4, 6], t = 6 => 4
//[-5, 2, 10, 4, 6], t = 20 => -1

//Solution 1 using a loop / Big-O = O(n)
function linearSearch(arr, target) {
  //loop through arr, and if any el in ar === target, return index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

//Solution 2 using array methods / Big-O = O(n)
function linearSearch(arr, target) {
  //indexOf will do a for loop pretty much
  return arr.indexOf(target);
}

//test code
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
