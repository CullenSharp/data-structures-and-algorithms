'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

describe('Testing methods on binary tree class', () => {
  const binaryTree = new BinaryTree();

  binaryTree.root = new Node(1);
  binaryTree.root.left = new Node(2);
  binaryTree.root.right = new Node(3);
  binaryTree.root.left.left = new Node(4);
  binaryTree.root.left.right = new Node(5);
  binaryTree.root.right.left = new Node(6);
  binaryTree.root.right.right = new Node(7);

  it('expect true when given a value contained in the tree', () => {
    expect(binaryTree.contains(2)).toBeTruthy();
    expect(binaryTree.contains(3)).toBeTruthy();
    expect(binaryTree.contains(7)).toBeTruthy();
  });

  it('expect false when given a value not contained', () => {
    expect(binaryTree.contains('a')).toBeFalsy();
    expect(binaryTree.contains(100)).toBeFalsy();
    expect(binaryTree.contains(null)).toBeFalsy();
  });

  it('expect in-order traversal to traverse in order', () => {
    const expected = [4,2,5,1,6,3,7];

    expect(binaryTree.inOrder()).toEqual(expected);
  });

  it('expect post-order traversal to traverse in post-order', () => {
    const expected = [4,5,2,6,7,3,1];

    expect(binaryTree.postOrder()).toEqual(expected);
  });

  it('expect pre-order traversal to traverse in pre-order', () => {
    const expected = [1,2,4,5,3,6,7];

    expect(binaryTree.preOrder()).toEqual(expected);
  });

  it('expect .add to add values to the ends of the tree', () =>{
    const expected = '{"root":{"value":1,"left":{"value":8,"left":{"value":9,"left":null,"right":null},"right":{"value":9,"left":null,"right":null}},"right":{"value":8,"left":{"value":9,"left":null,"right":null},"right":{"value":9,"left":null,"right":null}}}}';
    const tempTree = new BinaryTree();

    tempTree.root = new Node(1);

    tempTree.add(8);
    tempTree.add(9);

    expect(JSON.stringify(tempTree)).toEqual(expected);
  });
});
