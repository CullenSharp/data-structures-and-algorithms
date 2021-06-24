'use strict';

// Esoteric Resources
const { LinkedList } = require('./linked-list.js');

function zipLists(a, b) {
  if(!a || !b) {throw new Error('one or more arguments are undefined');}

  let res = new LinkedList();
  let left = a.head;
  let right = b.head;

  for(let i = 0; i < (a.size + b.size); i++) {
    if(left !== null) {
      res.insert(left.value);
      left = left.next;
    } else {
      if(right === null) {return res.head;}
      res.insert(right.value);
      right = right.next;
    }

    if(right !== null) {
      res.insert(right.value);
      right = right.next;
    } else {
      if(left === null) {return res.head;}
      res.insert(left.value);
      left = left.next;
    }
  }

  return res.head;
}

////////////// unit tests //////////////

// expect throw exception
try {
  zipLists();
} catch(e) {
  console.log(e, '\n');
}

// expect pass
try{
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert('c');
  list1.insert('b');
  list1.insert('a');

  list2.insert('f');
  list2.insert('e');
  list2.insert(null);

  console.log(JSON.stringify(zipLists(list1, list2)));
} catch(e) {
  console.log(e);
}
