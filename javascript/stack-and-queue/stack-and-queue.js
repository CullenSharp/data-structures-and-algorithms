'use strict';

const Queue = require('./queue.js');
const Stack = require('./stack.js');

const stack = new Stack();

try{
  stack.push(4);
  console.log(stack);
  console.log(stack.pop());
  console.log(stack.isEmpty());
} catch(e) {
  console.log(e);
}

try{
  stack.push(4);
  stack.push(2);
} catch(e) {
  console.log(e);
}

try{
  console.log(stack.peek());
  console.log(stack.isEmpty());
} catch(e) {
  console.log(e);
}

try {
  const unitTest = new Stack();
  unitTest.pop();
} catch(e) {
  console.log(e);
}

try {
  const unitTest = new Stack();
  unitTest.peek();
} catch(e) {
  console.log(e);
}

const queue = new Queue();

try{
  queue.enqueue(4);
  queue.enqueue(2);
  queue.enqueue(1);
  console.log(stack);
} catch(e) {
  console.log(e);
}

try {
  console.log(queue.peek());
} catch(e) {
  console.log(e);
}

try{
  console.log(queue.dequeue());
  queue.dequeue();
  queue.dequeue();
} catch(e) {
  console.log(e);
}

try {
  queue.dequeue();
} catch(e) {
  console.log(e);
}

try {
  console.log(queue.isEmpty());
} catch(e) {
  console.log(e);
}
