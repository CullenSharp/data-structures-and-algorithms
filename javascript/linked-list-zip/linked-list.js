'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    if(!Node){ throw new Error('node class doesn\'t exist'); }

    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;

    return this.head;
  }

  includes(value) {
    if(!this.head) {throw new Error('linkedList contains no values');}
    if(value === undefined || value === null) {
      throw new Error('invalid parameter');
    }

    let current = this.head;
    if(current.value === value) { return true; }
    while(current !== null){
      if(value === current.value){ return true; }
      current = current.next;
    }

    return false;
  }

  toString() {
    if(!this.head) {return this.head; }

    let current = this.head;
    let res = '';

    while(current !== null){
      res += '{ ' + current.value + ' } -> ';
      current = current.next;
    }

    return res + 'null';
  }

  toArray() {
    if(!this.head) {return [];}
    let current = this.head;
    let res = [];

    for(let i = 0; i < this.size; i++) {
      res[i] = current.value;
      current = current.next;
    }

    return res;
  }
}


module.exports = {
  Node,
  LinkedList,
};
