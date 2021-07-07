'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

console.log('\n', '-- ✨ test 1 ✨ --', '\n');
// expect 1,2,3,4,5,6,7
try {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node(1);
  binaryTree.root.left = new Node(2);
  binaryTree.root.right = new Node(3);
  binaryTree.root.left.left = new Node(4);
  binaryTree.root.left.right = new Node(5);
  binaryTree.root.right.left = new Node(6);
  binaryTree.root.right.right = new Node(7);

  binaryTree.breadthFirst();
} catch(e) {
  console.log(e);
}

console.log('\n', '-- ✨ test 2 ✨ --', '\n');
// expect 1,a,3,true,oops,6,{yummy: 'snacks'},8,[1,2,3,4,5]
try {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node(1);
  binaryTree.root.left = new Node('a');
  binaryTree.root.right = new Node(3);
  binaryTree.root.left.left = new Node(true);
  binaryTree.root.left.right = new Node('oops');
  binaryTree.root.right.left = new Node(6);
  binaryTree.root.right.right = new Node({yummy: 'snacks'});
  binaryTree.root.right.right.left = new Node(8);
  binaryTree.root.right.right.right = new Node([1,2,3,4,5]);

  binaryTree.breadthFirst();
} catch(e) {
  console.log(e);
}

console.log('\n', '-- ✨ test 3 ✨ --', '\n');
// expect exception
try{
  const binaryTree = new BinaryTree();

  binaryTree.breadthFirst();
} catch(e) {
  console.error(e);
}
