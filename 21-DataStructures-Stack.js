//Stack
//The stack data structure is a sequential collection of elements that follows the principle of Last In - First Out (LIFO).
//The last element inserted into the stack is the first one to be removed.
//Stack is an abstract Data Type. It is defined by its beahvior rather than being a mathematical model.
//The Stack data structure supports two main operations:
//- Push, which adds an element to the collection
//- Pop, which removes the most recently added element from the collection.

//Examples of Stack Usage
//Browser History tracking
//Undo operation when typing
//Expression conversions
//Call stack in JavaScript runtime.

//Stack Implementation (methods - operations)

//stack class
class Stack {
  constructor() {
    this.items = [];
  }
  //push(element) => add element to the top of the stack
  push(element) {
    this.items.push(element);
  }
  //pop() => remove the top most element from the stack
  pop() {
    return this.items.pop();
  }
  //peek() => get the value of the top most element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }
  //isEmpty() => check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  //size() => get the number of elements in the stack.
  size() {
    return this.items.length;
  }
  //print() => visualize the elements in the stack.
  print() {
    console.log(this.items.toString());
  }
}

//create a new stack instance
const stack = new Stack();
console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
stack.print();
