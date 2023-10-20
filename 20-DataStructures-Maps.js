//Maps
//A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
//Te retrieve a value, you cna use the corresponding key.
//Maps are iterable. They can be used with a for...of loop.

//Objects vs Maps
//Objects are unordered, Maps are ordered.
//Keys in objects cn only be string or symbols type, whereas in maps, they can be of any type.
//An object has a prototype and may contain a few default keys which may callide with your own keys if not careful. A map on the other hand does not contain any keys by default.
//Objects are not iterables whereas maps are iterables.
//The number of items in an object must be determined manually whereasit is readily available with the size property in a map.
//Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.

//map constructor
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

//Add new values
map.set("c", 3);
//check if key exists in a map
console.log(map.has("a"));
//delete a key-value pair
map.delete("c");
//check the number of key-value pairs
console.log(map.size);

//clear all key-value pairs
map.clear();

//iterate over the map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
