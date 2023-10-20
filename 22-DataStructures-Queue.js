//Queue
//The queue data structure is a sequential collection of elements that follows the principle of First in First Out (FIFO)
//The first element inserted into the queue is the first element to be removed.
//Queue is an abstract date type. It is defined by its behavior rather than being a mathematical model.
//It supports two main operations:
//-Enqueue => adds an element to the "tail/rear" of the queue/collection
//-Dequeue => removes the element from the "head/front" of the collection.

//Queue usage
//Printers
//CPU tasks scheduling
//Callback queue in JavaScript Runtime.

//Queue Implementation
//Big-O = O(n) Linear Complexity beacuse dequeue is not constant
class Queue {
  constructor() {
    this.items = [];
  }
  //enqueue(element) => add element at the rear
  enqueue(element) {
    this.items.push(element);
  }
  //dequeue() => remove the element in the front
  dequeue() {
    return this.items.shift(); //Big-O = O(n) linear...
  }
  //isEmpty() => check if the queue is Empty
  isEmpty() {
    return this.items.length === 0;
  }
  //peek() => get the value at the front without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  //size() => get the number of elements in the queue
  size() {
    return this.items.length;
  }
  //print() => visualize the elements in the queue.
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

console.log("////OPTIMIZED IMPLEMENTATION////");
//Big-O = O(1) Constant Time complexity
class Queue1 {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue1 = new Queue1();
console.log(queue.isEmpty());

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
console.log(queue1.size());
queue1.print();

console.log(queue1.dequeue());
console.log(queue1.peek());
