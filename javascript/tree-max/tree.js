'use strict';
module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMax() {
    if(!this.root) { throw new Error('Tree is empty'); }
    if( isNaN(this.root.value) ){ throw new TypeError('Tree contains non numbers'); }

    let res = 0;

    const walk = (node) => {
      if( isNaN(node.value) ){ throw new TypeError('Tree contains non numbers'); }

      res < node.value ? res = node.value : res;

      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
    };

    walk(this.root);
    return res;
  }
};
