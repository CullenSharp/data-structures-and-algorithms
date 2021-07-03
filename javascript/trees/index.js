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


// expect true
console.log(binaryTree.contains(1));
console.log(binaryTree.contains(2));
console.log(binaryTree.contains(3));

console.log('\n');

// expect false
console.log(binaryTree.contains(10));
console.log(binaryTree.contains('a'));
console.log(binaryTree.contains(null));

//add node on left
binaryTree.add(8);
binaryTree.add(9);

console.log(JSON.stringify(binaryTree));
