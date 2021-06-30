'use strict';

const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(value) {
    if(value === 'cat' || value === 'dog') {
      switch(value){
      case 'dog':
        this.dogs.enqueue(value);
        break;
      default:
        this.cats.enqueue(value);
        break;
      }
    } else { throw new Error('Argument must be "cat" or "dog" '); }
  }

  dequeue(pref) {
    if(pref === 'cat' || pref === 'dog') {
      if(!this[pref+'s'].front) {throw new Error(`Our shelter doesn't have any ${pref}s`); }

      switch(pref){
      case 'dog':
        return this.dogs.dequeue(pref);
      default:
        return this.cats.dequeue(pref);
      }
    } else { return null; }
  }
}

// === === unit tests === === //

try {
  const shelter = new AnimalShelter();

  shelter.enqueue('dog');
  shelter.enqueue('cat');

  console.log(shelter.cats);
  console.log(shelter.dogs);
} catch(e) {
  console.log(e);
}

// expect exception to be thrown
try {
  const shelter = new AnimalShelter();
  shelter.dequeue('cat');
} catch(e) {
  console.log(e);
}

try {
  const shelter = new AnimalShelter();
  shelter.enqueue('cat');
  console.log(shelter.dequeue('cat'));
} catch(e) {
  console.log(e);
}

try {
  const shelter = new AnimalShelter();
  shelter.enqueue('cat');
  console.log(shelter.dequeue());
} catch(e) {
  console.log(e);
}
