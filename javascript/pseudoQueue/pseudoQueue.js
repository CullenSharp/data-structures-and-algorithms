'use strict';

const Stack = require('./stack');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.stack = new Stack();
    this.reverseStack = new Stack();
  }

  enqueue(value) {
    this.stack.push(value);
    this.rear = this.stack.top;
  }

  dequeue() {
    if(!this.stack.top) {throw new Error('Queue is empty'); }
    while(this.stack.top !== null) {
      this.reverseStack.push(this.stack.pop());
    }

    return this.reverseStack.pop();
  }
}

const fakeQueue = new PseudoQueue();

fakeQueue.enqueue('a');
fakeQueue.enqueue('b');
fakeQueue.enqueue('c');

console.log(fakeQueue.rear);

console.log(fakeQueue.dequeue());
