//Circular Queue
//The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
//Also refered as a circular buffer or ring buffer and follows the FIFO principle.
//A circular queue will resuse the empty block created during the dequeue operation.
//When working with queues of fixed maximum size, a circular queue is a great implementation choice.

//Circular Queue Usage
//Clock
//Streaming Data
//Traffic Lights

//Circular Queue Implementation

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  //isFull() => check if the circular queue is full
  isFull() {
    return this.currentLength === this.capacity;
  }
  ///isEmpty() => check if the queue is empty
  isEmpty() {
    return this.currentLength === 0;
  }
  //enqueue(element) => add item to the front
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  //dequeue() => remove items from the front
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  //peek() => check the element at the front without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  //print() => take a look at the elements in the queue.
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
    } else {
      let i; //to traverse the queue
      let str = ""; //store the element in the queue
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
