'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if(!Node){ throw 'node class doesn\'t exist'; }

    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    return this.head;
  }

  includes(value) {
    if(!this.head) {throw 'linkedList contains no values';}
    if(value === undefined || value === null) {
      throw 'invalid parameter';
    }

    let current = this.head;
    if(current.value === value) { return true; }
    while(current.next !== null){
      current = current.next;
      if(value === current.value){ return true; }
    }

    return false;
  }

  toString() {
    if(!this.head) {throw 'linkedList contains no values';}

    let current = this.head;
    let res = '{ ' + current.value + ' } -> ';

    while(current.next !== null){
      current = current.next;
      res += '{ ' + current.value + ' } -> ';
    }

    return res + 'null';
  }
}

/////////////////// TESTS //////////////////////

//creates an emp
try{
  const linkedList = new LinkedList();

  console.log(linkedList instanceof LinkedList, '\n');
  console.log(linkedList, '\n');
} catch(err) {
  console.log(err);
}

try{
  const linkedList = new LinkedList();
  linkedList.insert('a');

  console.log(linkedList.head, '\n');
} catch(err) {
  console.log(err);
}

//throws semantic err
try{
  const linkedList = new LinkedList();
  linkedList.toString();

} catch(err) {
  console.log({ err }, '\n');
}

//can insert multiple values
try{
  const linkedList = new LinkedList();
  linkedList.insert('c');
  linkedList.insert('b');
  linkedList.insert('a');

  console.log(linkedList.toString(), '\n');
} catch(err) {
  console.log({ err });
}

//linkedlist.head returns the head of the list
try{
  const linkedList = new LinkedList();
  linkedList.insert('c');
  linkedList.insert('b');
  linkedList.insert('a');

  console.log(linkedList.head, '\n');
} catch(err) {
  console.log({ err });
}


//includes returns false if not in list
//returns true if found
try{
  const linkedList = new LinkedList();
  linkedList.insert('c');
  linkedList.insert('b');
  linkedList.insert('a');

  //expect: false, true, true, false, false, true, error
  const testCases = ['1','b','c','x','y','a',undefined];
  for(let testCase of testCases){
    console.log(linkedList.includes(testCase), '\n');
  }
} catch(err) {
  console.log({ err });
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};
