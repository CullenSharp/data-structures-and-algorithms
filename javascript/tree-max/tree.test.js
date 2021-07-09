'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

describe('testing treemax method', () => {
  it('happy path', () => {
    //driver code
    const binaryTree = new BinaryTree();

    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);
    binaryTree.root.left.left = new Node(100);
    binaryTree.root.left.right = new Node(5);
    binaryTree.root.right.left = new Node(6);
    binaryTree.root.right.right = new Node(7);

    expect(binaryTree.findMax()).toEqual(100);

    binaryTree.root.left.left.value = 2;

    expect(binaryTree.findMax()).toEqual(7);

    binaryTree.root.value = 65;

    expect(binaryTree.findMax()).toEqual(65);
  });

  it('Should throw exception when the tree is empty', () => {
    const tempTree = new BinaryTree();

    expect(() => tempTree.findMax()).toThrow('Tree is empty');
  });

  it('throw TypeError when value is not a number', () => {
    const tempTree = new BinaryTree();
    tempTree.root = new Node('a');

    expect(() => tempTree.findMax()).toThrow(TypeError);
  });
});
