'use strict';

const Node = require('./node');

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertMany(values) {
    // take an array for values
    // add them to a tree

    const newNode = new Node(values.shift());
    this.root = newNode;

    let current = this.root;
    let parents = [];

    while(values.length > 0){
      for(let i = 0; i < 3; i++){
        let temp = new Node(values.shift());
        parents.push(temp);

        current.children[i] = temp;
      }
      current = parents.shift();
    }
  }

  breadthFirst() {
    if(this.root === null){throw new Error(`Can't traverse an empty tree`);}

    let queue = [];
    let res = [];

    queue.push(this.root);

    while(queue.length > 0){
      if(queue[0].children[0]) { queue.push(queue[0].children[0]); }
      if(queue[0].children[1]) { queue.push(queue[0].children[1]); }
      if(queue[0].children[2]) { queue.push(queue[0].children[2]); }

      res.push(queue.shift().value);
    }
    console.log(res);
    return res;
  }
};
