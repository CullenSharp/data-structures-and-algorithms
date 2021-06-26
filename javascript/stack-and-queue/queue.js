'use strict';

const Node = require('./node.js');

module.exports = class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  enqueue(value) {
    if(!Node){ throw new Error('node class doesn\'t exist'); }

    const node = new Node(value);
    if(!this.rear) {
      this.rear = node;
      this.front = node;
      this.front.next = this.rear;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.size++;
  }

  dequeue() {
    if(!this.front) {throw new Error('Queue is empty');}
    let temp = this.front;

    this.front = temp.next;
    temp.next = null;

    return temp.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
};
