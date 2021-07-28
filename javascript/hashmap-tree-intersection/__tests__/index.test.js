/* eslint-disable require-jsdoc */
'use strict';

const {describe, test, expect} = require('@jest/globals');

const treeIntersection = require('../index');
const BinaryTree = require('../binary-tree');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe('Testing treeIntersection function', () => {
  test.skip('Should return an empty array with zero intersections', () => {
    const treeOne = new BinaryTree();
    const treeTwo = new BinaryTree();

    treeOne.root = new Node(1);
    treeOne.root.left = new Node(2);
    treeOne.root.right = new Node(3);

    treeTwo.root = new Node(4);
    treeTwo.root.left = new Node(5);
    treeTwo.root.right = new Node(6);

    expect(treeIntersection(treeOne, treeTwo)).toEqual([]);
  });

  test.skip('Should return an array size n with identical trees', () => {
    const treeOne = new BinaryTree();
    const treeTwo = new BinaryTree();

    treeOne.root = new Node(1);
    treeOne.root.left = new Node(2);
    treeOne.root.right = new Node(3);

    treeTwo.root = new Node(1);
    treeTwo.root.left = new Node(2);
    treeTwo.root.right = new Node(3);

    expect(treeIntersection(treeOne, treeTwo)).toEqual([1, 2, 3]);
  });

  test('Should return an array of intersections between two trees', () => {
    const treeOne = new BinaryTree();
    const treeTwo = new BinaryTree();

    treeOne.root = new Node(4);
    treeOne.root.left = new Node(2);
    treeOne.root.right = new Node(324);
    treeOne.root.left.left = new Node(2);
    treeOne.root.left.right = new Node(234);
    treeOne.root.right.left = new Node(32);
    treeOne.root.right.right = new Node(3);

    treeTwo.root = new Node(1);
    treeTwo.root.left = new Node(2);
    treeTwo.root.right = new Node(33);
    treeTwo.root.left.left = new Node(32);
    treeTwo.root.left.left = new Node(10);
    treeTwo.root.right.left = new Node(234);
    treeTwo.root.right.left = new Node(3);

    expect(treeIntersection(treeOne, treeTwo)).toEqual([2, 2, 32, 234, 3]);
  });
});


