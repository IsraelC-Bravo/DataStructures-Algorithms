//Hash-Table or Hash-Map
//A Hash Map is used to store key-value pairs.
//Given a key, you can asociate a value with that key for a very fast loop.
//JavaScript's Object is a special implementatio of the Hash Table data structure. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties.

//Hash tables(maps) store key-value pairs in a fix sized array.
//Arrays have a numeric index, so how do we implement numbers as an index?
//A Hashing function accepts the string key, converts it into a hash code using defined logic and then maps it into a numeric index that is within the bounds of the array.
//Using the index to store the value, the same hashing function is reused to retrieve the value given a key.

//A Hash Table-Map supports three main operations:
//1. Set to stroe a key-value pair
//2. Get to retrieve a value given its key
//3. Remove to delete a key-value pair.
//4. Hashing function to convert a string key to a numeric index.

//Hash Table Usage.
//Has tables are typically implemented where constant time lookup and insertion are required
//Database Indexing
//Caches

//Hash Table-Map Implementation

class HashTable {
  //the constructor takes a size parameter for a fixed size Arr
  constructor(size) {
    //create a new Array with a fixed size
    this.table = new Array(size);
    this.size = size;
  }

  //hash() => converts a "string" key into a number
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      //to get the number, add all letters in the key
      total += key.charCodeAt(i);
    }
    //% length of the table to make sure its in the bounds of the array.
    return total % this.size;
  }

  //set() => stroe a key-value pair
  set(key, value) {
    //retrieve the new numeric key from the hash() conversion
    const index = this.hash(key);
    //set the value to the newly given index
    //this.table[index] = value *this may cause collisions
    //instead... set the new index to a bucket container
    const bucket = this.table[index];
    //If there is no index at the bucket..
    if (!bucket) {
      //set the new container to hold a 2D arr with key-value pair
      this.table[index] = [[key, value]];
      //if there is already an index with same num
    } else {
      //create a var to check if the keys(nums) are the same
      const sameKeyItem = bucket.find((item) => item[0] === key);
      //if so, store the new key-value arr into index 1
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        //if not, push a new index
        bucket.push([key, value]);
      }
    }
  }

  //get() => returna a value given a key
  get(key) {
    //retrieve the new numeric key from the hash() conversion
    const index = this.hash(key);
    //return the value using the newly given index
    //return this.table[index]
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  //remove() => remove a value given a key
  remove(key) {
    //retrieve the new numeric key from the hash() conversion
    const index = this.hash(key);
    //set the value of that index to undefined
    //this.table[index] = undefined
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  //display() => log the index and values for the table
  display() {
    //loop through the table's length
    for (let i = 0; i < this.table.length; i++) {
      //if there is an index
      if (this.table[i]) {
        //console.log the index and the value
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log(table.get("name"));

//however there is a "bug" in our code... Since keys can have the same letters such as: "name" or "mane", the latter key will replace the old key-value pair

table.set("mane", "Clark");
table.set("name", "Diana");
table.display();
table.remove("name");
table.display();

//this is called a "Collision" and needs to be handled.
