'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');


const binaryTree = new BinaryTree();

binaryTree.root = new Node(1);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(3);
binaryTree.root.left.left = new Node(4);
binaryTree.root.left.right = new Node(5);
binaryTree.root.right.left = new Node(6);
binaryTree.root.right.right = new Node(7);

console.log('\n', 'testing search cases', '\n');

// expect true
try{
  console.log(binaryTree.contains(1));
  console.log(binaryTree.contains(2));
  console.log(binaryTree.contains(3));
} catch(e) {
  console.log(e);
}

console.log('\n');

// expect false
try {
  console.log(binaryTree.contains(10));
  console.log(binaryTree.contains('a'));
  console.log(binaryTree.contains(null));
} catch(e) {
  console.log(e);
}

console.log('\n', 'testing node insertion', '\n');

//add node on left side at the bottom
try{
  const tempTree = new BinaryTree();
  tempTree.root = new Node(1);

  tempTree.add(8);
  tempTree.add(9);

  console.log('\n', JSON.stringify(tempTree), '\n');
} catch(e) {
  console.log(e);
}

console.log('\n', 'testing inOrder traversal', '\n');

// expect 4,2,5,1,6,3,7
try {
  binaryTree.inOrder();
} catch(e) {
  console.log(e);
}

console.log('\n', 'testing preOrder traversal', '\n');

// expect 1,2,4,5,3,6,7
try {
  binaryTree.preOrder();
} catch(e) {
  console.log(e);
}

console.log('\n', 'testing postOrder traversal', '\n');

// expect 4,5,2,6,7,3,1
try {
  binaryTree.postOrder();
} catch(e) {
  console.log(e);
}