'use strict';

const Node = require('./node');

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
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
    let res = [];

    const walk = (node) => {
      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }

      res.push(node.value);
    };

    walk(this.root);
    return res;
  }

  preOrder() {
    let res = [];
    const walk = (node) => {
      res.push(node.value);

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);
    return res;
  }

  inOrder() {
    let res = [];

    const walk = (node) => {
      if(node.left){ walk(node.left); }

      res.push(node.value);

      if(node.right){ walk(node.right); }
    };

    walk(this.root);
    return res;
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
