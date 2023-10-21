//Hash-Table or Hash-Map
//A Hash Map is used to store key-value pairs.
//Given a key, you can asociate a value with that key for a very fast loop.
//JavaScript's Object is a special implementatio of the Hash Table data structure. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties.

//Hash tables(maps) store key-value pairs in a fix sized array.
//Arrays have a numeric index, so how do we implement numbers as an index?
//A Hashing function accepts the string key, converts it into a hash code using defined logic and then maps it into a numeric index that is within the bounds of the array.
//Using the index to store the value, the same hashing function is reused to retrieve the value given a key.
