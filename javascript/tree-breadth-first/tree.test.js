'use strict';

const Node = require('./node');
const BST = require('./tree');

describe('testing breadthFirst traversal', () => {
  it('testing happy path', () => {
    let expected = [1,2,3];
    const bST = new BST();

    bST.root = new Node(1);
    bST.root.left = new Node(2);
    bST.root.right = new Node(3);

    expect(bST.breadthFirst()).toEqual(expected);

    bST.root.left.left = new Node(4);
    expected = [1,2,3,4];

    expect(bST.breadthFirst()).toEqual(expected);
  });

  it('testing crazy edge case', () => {
    const expected = [1,2,3,4,7,5,8,6,9,10];
    const bST = new BST();

    bST.root = new Node(1);
    bST.root.left = new Node(2);
    bST.root.left.left = new Node(4);
    bST.root.left.left.left = new Node(5);
    bST.root.left.left.left.left = new Node(6);
    bST.root.right = new Node(3);
    bST.root.right.right = new Node(7);
    bST.root.right.right.right = new Node(8);
    bST.root.right.right.right.right = new Node(9);
    bST.root.right.right.right.right.right = new Node(10);

    expect(bST.breadthFirst()).toEqual(expected);
  });

  it('works with many dataTypes', () => {
    const expected = [1,'a',3,true,'oops',6,{yummy:'snacks'},8,[1,2,3,4,5]];
    const bST = new BST();

    bST.root = new Node(1);
    bST.root.left = new Node('a');
    bST.root.right = new Node(3);
    bST.root.left.left = new Node(true);
    bST.root.left.right = new Node('oops');
    bST.root.right.left = new Node(6);
    bST.root.right.right = new Node({yummy: 'snacks'});
    bST.root.right.right.left = new Node(8);
    bST.root.right.right.right = new Node([1,2,3,4,5]);

    expect(bST.breadthFirst()).toEqual(expected);
  });

  it('throw exception on empty tree', () => {
    const bST = new BST();

    expect(() => bST.breadthFirst()).toThrow(Error);
  });
});
