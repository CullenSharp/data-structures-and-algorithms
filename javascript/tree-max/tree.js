'use strict';

const Node = require('./node');

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMax() {
    if( isNaN(this.root.value) ){ throw new Error('Tree contains non numbers'); }

    let res = 0;

    const walk = (node) => {
      if( isNaN(node.value) ){ throw new Error('Tree contains non numbers'); }

      res < node.value ? res = node.value : res;

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);
    return res;
  }
  add(value) {
    const newNode = new Node(value);
    let current;

    const walk = (node) => {
      current = node;

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);

    if(!current.left){ current.left = newNode; }
    if(!current.right){ current.right = newNode; }
  }

  postOrder() {
    const walk = (node) => {
      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }

      console.log(node.value);
    };

    walk(this.root);
  }

  preOrder() {
    const walk = (node) => {
      console.log(node.value);

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);
  }

  inOrder() {
    const walk = (node) => {
      if(node.left){ walk(node.left); }

      console.log(node.value);

      if(node.right){ walk(node.right); }
    };

    walk(this.root);
  }

  contains(value, res = false) {
    if(this.root.value === value){ return true; }

    const walk =  (node) => {
      if(node.value === value){ res = true; }

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);
    return res;
  }
};
