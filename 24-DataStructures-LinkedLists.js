//Linked List
//A linked list is a linear data structure that includes a series of connected nodes.
//Each node consisits of a data value and a pointer that points to the next node.
//The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
//Random access of elements is not feasible (easy to do) and accesing an element has linear time complexity.
//The linked list data structure supports three main operations:
//1. Insertion - to add an element at the beginning, end or at a given index in the list.
//2. Deletion - to remove an item given its index or value.
//3. Search - to find an element given its value

//Linked List Usage
//all applications of queues and stacks are linked lists
//image viewers.

//Linked List - Node Class
class Node {
  constructor(value) {
    this.value = value;
    //when there is only one node, the pointer     points to null
    this.next = null;
  }
}

//Linked List Class
class LinkedList {
  constructor() {
    //When the list is empty the head points to null
    this.head = null;
    //define length of list as 0, + or - as you add or remove nodes.
    this.size = 0;
  }

  //isEmpty() => checks if the Linked List has ay nodes
  isEmpty() {
    return this.size === 0;
  }

  //getSize() => return the Linked List number of nodes.
  getSize() {
    return this.size;
  }

  //prepend() => adding new nodes at the start of the list (empty list & existing list). Big-O = O(1) Constant Complexity
  prepend(value) {
    //create a new node
    const node = new Node(value);
    //prepend with empty list
    if (this.isEmpty()) {
      //put the head to the newly added node
      this.head = node;
    } else {
      //prepend with existing list
      node.next = this.head;
      //move the head to the newly added node
      this.head = node;
    }
    //increment the size of the list
    this.size++;
  }

  //append() => add a new node at the end of the list (empty or existing). Big-O = O(n) Linear Complexity
  append(value) {
    //create a new node
    const node = new Node(value);
    //append with empty list
    if (this.isEmpty()) {
      //put the head to the newly added node
      this.head = node;
    } else {
      //append with existing list
      let prev = this.head;
      //loop while pre.next !== null
      while (prev.next) {
        //move the prev pointer to the last node
        prev = prev.next;
      }
      //set prev.next = node to point to null after this node
      prev.next = node;
    }
    //increment the size of the list
    this.size++;
  }

  //insert() => add a new node at a given index.
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    //Insert a new node at index[0]
    if (index === 0) {
      //call prepend()
      this.prepend(value);
    } else {
      //Index > 0
      //create a new node
      const node = new Node(value);
      //set a temp value at the head
      let prev = this.head;
      //loop through the list until index - 1 to stop before the given index.
      for (let i = 0; i < index - 1; i++) {
        //set the temp value to point to the desired index
        prev = prev.next;
      }
      //set the node to be inserted at the desired index
      node.next = prev.next;
      prev.next = node;
      //increment the size of the List
      this.size++;
    }
  }

  //removeFrom() => remove a node/element from the list given its index
  removeFrom(index) {
    //invalid index
    if (index < 0 || index >= this.size) {
      return null;
    }
    //index === 0
    //create a temp var to point at given index
    let removedNode;
    if (index === 0) {
      //put the newly pointer at the head
      removedNode = this.head;
      //move the head to the next value
      this.head = this.head.next;
    } else {
      //set a temp value at the head
      let prev = this.head;
      //loop through the list until index - 1 to stop before the given index.
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      //set the node to be removed from the desired index
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    //decrease the size of the list
    this.size--;
    //return the removed value
    return removedNode.value;
  }

  //removeValue() => remove a node by a given value
  removeValue(value) {
    //empty list
    if (this.isEmpty()) {
      return null;
    }
    //remove value at the head node Big-O = O(1)
    if (this.head.value === value) {
      //set the head to the next node
      this.head = this.head.next;
      //decrease the size of the list
      this.size--;
      //return the value of the node removed
      return value;
    } else {
      //Big-O = O(n)
      //remove a value in a node after head
      //create a prev pointer at the head node
      let prev = this.head;
      //traverse the list while the next value !== value
      while (prev.next && prev.next.value !== value) {
        //set prev to prev.next to point to the desired value
        prev = prev.next;
      }
      if (prev.next) {
        //create a temp pointer to set the node to remove
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  //search() => return the index of the node by a given value
  search(value) {
    //return -1 if list is empty
    if (this.isEmpty()) {
      return -1;
    } else {
      //new var to track the index
      let i = 0;
      //create a var that points at head
      let curr = this.head;
      //traverse the list while curr exists
      while (curr) {
        //return the i when values match
        if (curr.value === value) {
          return i;
        }
        //set curr to curr.next if values do not match
        curr = curr.next;
        //increment i
        i++;
      }
      //after the list has been traversed, if value is not found, return -1
      return -1;
    }
  }

  //reverse() => reverse a list by exchanging pointers at each node
  reverse() {
    //set a temp var "prev" to null
    let prev = null;
    //set a second temp var "curr" to head
    let curr = this.head;
    //while curr is true
    while (curr) {
      //set a third var "next" to curr.next
      let next = curr.next;
      //curr.next now point to prev
      curr.next = prev;
      //prev now moved to curr node
      prev = curr;
      //curr node is set to next node
      curr = next;
    }
    //move head to prev node
    this.head = prev;
  }

  //print() => visualize the list (empty or existing)
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty.");
    } else {
      //create a temp pointer to traverse the list
      let curr = this.head;
      //add a list to store the values
      let listValues = "";
      //loop while curr !== null
      while (curr) {
        //add value to listValues
        listValues += `${curr.value} `;
        //move curr to next node
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
