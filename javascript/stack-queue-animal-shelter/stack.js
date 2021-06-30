'use strict';

const Node = require('./node.js');

module.exports = class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if(!Node){ throw new Error('node class doesn\'t exist'); }

    const node = new Node(value);
    node.next = this.top;

    this.top = node;
    this.size++;
  }

  pop() {
    if(!this.top) {throw new Error('Stack is empty');}
    let temp = this.top;

    this.top = temp.next;
    temp.next = null;

    return temp.value;
  }

  peek() {
    if(!this.top) {throw new Error('Stack is empty');}
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
};
