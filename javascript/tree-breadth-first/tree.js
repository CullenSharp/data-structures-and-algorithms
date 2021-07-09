'use strict';
module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst() {
    if(this.root === null){throw new Error(`Can't traverse an empty tree`);}
    let res = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length > 0){
      if(queue[0].left) { queue.push(queue[0].left); }
      if(queue[0].right) { queue.push(queue[0].right); }

      // console.log(queue[0].value);
      res.push(queue.shift().value);
    }

    return res;
  }
};
