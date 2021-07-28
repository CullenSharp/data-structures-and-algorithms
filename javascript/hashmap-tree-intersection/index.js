/* eslint-disable require-jsdoc */
const Hashmap = require('./hashmap');

function walk(node, hashmap) {
  if (node.left) {
    walk(node.left, hashmap);
  }
  if (node.right) {
    walk(node.right, hashmap);
  }

  hashmap.add(`${node.value}`, node.value);
}

function compare(node, hashmap) {
  if (node.left) {
    compare(node.left, hashmap);
  }
  if (node.right) {
    compare(node.right, hashmap);
  }
  if (hashmap.get(`${node.value}`)) {
    console.log('test', node.value);
  }
}

function treeIntersection(left, right, arr = []) {
  const hashmap = new Hashmap(1024);

  walk(left.root, hashmap);
  console.log(hashmap.get('2'));
}

module.exports = treeIntersection;
