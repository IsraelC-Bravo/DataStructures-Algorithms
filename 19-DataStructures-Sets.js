//Sets
//A set is a data structure that can hold a collection of values. The values MUST be unique.
//Sets can conatin a mix of different data types. Strings, Arrays, Booleans, Numbers, Objects..
//Sets are dinamically sized. We do not need to declase the size of the set before creating it.
//Sets do not maintain an insertion order.
//Sets are iterable, they can be used with a for...of loop.

//Sets vs Array
//Arrays can contain duplicate values
//Insertion order is maintained in arrays but not with sets.
//Searching and deleting an element is faster in a set than in an array.

const set = new Set([1, 2, 3]);

//add a value
set.add(4);
//sets will ignore duplicate values
set.add(5);
//delete an element in a set
set.delete(3);

//check the size of a set (length)
console.log(set.size);

//check if a set has an elemnet
console.log(set.has(4));

//delete all items in a set
set.clear();

//iterate
for (const item of set) {
  console.log(item);
}

//Big-O time complexity behaves similarly to Arrays.
