'use strict';

const KaryTree = require('./tree');

const karyTree = new KaryTree();

karyTree.insertMany([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

function fizzBuzzKaryTree(tree) {
  const values = tree.breadthFirst();
  const res = new KaryTree();

  for(let i = 0; i < values.length; i++){
    if(values[i] % 3 === 0) {
      values[i] = 'Fizz';
    } else if(values[i] % 5 === 0) {
      values[i] = 'Buzz';
    } else if(values[i] % 15 === 0) {
      values[i] = 'FizzBuzz';
    } else {
      values[i] = `${values[i]}`;
    }
  }

  res.insertMany(values);
  return res;
}

console.log(fizzBuzzKaryTree(karyTree).breadthFirst());
