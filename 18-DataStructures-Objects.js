//Objects
//An object is an unordered collection of key-value pairs. The key must be a string or a symbol data type whereas the value can be any type of data.
//To retrieve a value, you can use dot or bracket notation.
//An object is NOT iterable, you cannot use it in a for...of loop, but we can use a for...in loop.

//Object examples
const obj = {
  //properties
  name: "Israor",
  age: 25,
  "key-three": true,
  //methods
  sayMyName: function () {
    console.log(this.name);
  },
};

//add a key-value pair with dot notation
obj.hobby = "football";

//delete a key-value
delete obj.hobby;

//log a representation of the obj
console.log(obj);
//access a value with dot notation
console.log(obj.name);
console.log(obj.age);
//acces a value with bracket notation
console.log(obj["key-three"]);
//call a obj method.
obj.sayMyName();

//Other object methods
//Object.keys(), .values(), .entries()

//Objects Big-O time Complexity
//Insert or delete a key-value pair => O(1) Constant Complexity
//Access a key-value pair => O(1) Constant Complexity
//Search => O(n) Linear Complexity (iteration)
//Object.keys() => O(n) Linear complexity (iteration, create new array)
//Object.values() => O(n) Linear Complexity (iteration, create new array)
//Object.entries() => O(n) Linear Complexity (iteration create new array)

//NOTE: If the method contains a callback function that performs a loop, then the Big-O = O(2^n) Quadratic Complexity
