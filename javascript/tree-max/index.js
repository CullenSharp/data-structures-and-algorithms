'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

// expect 100
try {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node(1);
  binaryTree.root.left = new Node(2);
  binaryTree.root.right = new Node(3);
  binaryTree.root.left.left = new Node(100);
  binaryTree.root.left.right = new Node(5);
  binaryTree.root.right.left = new Node(6);
  binaryTree.root.right.right = new Node(7);

  console.log(binaryTree.findMax());
} catch(e) {
  console.error(e);
}

// expect exception
try {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node('a');

  console.log(binaryTree.findMax());
} catch(e) {
  console.error(e);
}

// expect exception
try {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node(1);
  binaryTree.root.left = new Node('a');

  console.log(binaryTree.findMax());
} catch(e) {
  console.error(e);
}
