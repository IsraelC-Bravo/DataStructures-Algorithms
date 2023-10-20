//Linked List - Node Class
class Node {
  constructor(value) {
    this.value = value;
    //when there is only one node, the pointer points to null
    this.next = null;
  }
}

//Linked List Class
class LinkedList {
  constructor() {
    //When the list is empty the head points to null
    this.head = null;
    this.tail = null;
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

  //prepend() => add a new node at the beginning of the list
  prepend(value) {
    //create a new node
    const node = new Node(value);
    //If list is empty
    if (this.isEmpty()) {
      //set head and tail to the new node
      this.head = node;
      this.tail = node;
    } else {
      //set the new node pointing to the head node
      node.next = this.head;
      //then move the head pointer to the newly added node.
      this.head = node;
    }
    //increment the size of the list
    this.size++;
  }

  //append() => add a new node at the end og the list
  append(value) {
    //create a new node and pass the value
    const node = new Node(value);
    //if the list is empty
    if (this.isEmpty()) {
      //Set both head and tail to the newly added node
      this.head = node;
      this.tail = node;
    } else {
      //set the tail node pointing to the newly added node
      this.tail.next = node;
      //then move the tail pointer to the new node
      this.tail = node;
    }
    //increase the size of the list
    this.size++;
  }

  //removeFromFront() => remove a node from the beginning of the list
  removeFromFront() {
    //If list is empty
    if (this.isEmpty()) {
      //there is no node to remove
      return null;
    }
    //set the value to the head node value
    const value = this.head.value;
    //move head to the next node
    this.head = this.head.next;
    //decrease the size of the list
    this.size--;
    //return the value
    return value;
  }

  //removeFromEnd() => remove a node from the end of the list
  removeFromEnd() {
    //If list is empty
    if (this.isEmpty()) {
      //there is no node to remove
      return null;
    }
    //If list is not empty, set value to value at tail node
    const value = this.tail.value;
    //now check if the list has only 1 node, if so...
    if (this.size === 1) {
      //set head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      //otherwise...
      //set a temp variable "prev" to the head
      let prev = this.head;
      //move the prev var to the last node before the tail node
      while (prev.next !== this.tail) {
        //move pre to the next node
        prev = prev.next;
      }
      //now, set the next node after prev to null
      prev.next = null;
      //move the tail to the prev var
      this.tail = prev;
    }
    //decrease the size of the list
    this.size--;
    //return the value
    return value;
  }
}
