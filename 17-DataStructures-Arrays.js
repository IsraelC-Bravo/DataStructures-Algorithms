//Arrays
//Arrays are a collection a data. It can hold different types of data: numbers, strings, arrays, objects, booleans...

const arr = [1, 2, 3, "Vishwas"];
//Add element at the end
arr.push(4);
//add element at the beginning
arr.unshift(0);
//remove element from the end
arr.pop();
//remove element from the beginning
arr.shift();
//loop through element
for (const item of arr) {
  console.log(item);
}
//other methods
//map, filter, reduce, concat, slice, splice.

//Array - Big-O time complexity
//Insert or Remove from the end => O(1) Constant Complexity
//Insert or Remove from the beginning => O(n) Linear Complexity (reorganization of indexes)
//Access an element => O(1) Constant Complexity
//search => O(n) Linear Complexity (iteration)
//push/pop => O(1) Constant Complexity
//shift/Unshift/concat/slice/splice => O(n) Linear Complexity (reorganization of arr)
//forEach/map/filter/reduce => O(n) Linear Complexity (iteration). If the call back function inside any of this Methods contain another loop, then the Big-O = O(2^n) Quadratic Complexity
