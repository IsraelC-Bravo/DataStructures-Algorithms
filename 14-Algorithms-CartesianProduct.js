//Instructions
//Given two finite non-empty sets (arrays), find their Cartesian Product.

//In Mathematics, specifically in Set Theory, the Cartesian Product of two sets A and B, denoted AxB, is the set of all ordered pairs(a, b) where a is in A and b is in B.

//arrA, arrB => arrays of integers. No empty arrays, no letters, no symbls.
//return the Cartesian Product (arrAxarrB).

//examples
//A = [1, 2], B = [3, 4] => AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]
//C = [4, 9], D = [2, 1, 8] => CxD = [[4, 2], [4, 1], [4, 8], [9, 2], [9, 1], [9, 8]]

//Catesian Product Idea:
//Traverse each array and pair each element in the first array with each element in the second array.

//Solution / Big-O = O(mn) - dependent of length of each arr
function cartesianProduct(arr1, arr2) {
  //create an empty arr
  let result = [];
  //loop throgh 1st arr
  for (let i = 0; i < arr1.length; i++) {
    //loop throgh 2nd arr
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

//Test Code
console.log(cartesianProduct([1, 2], [3, 4, 5]));
console.log(cartesianProduct([4, 9], [2, 1, 8]));
