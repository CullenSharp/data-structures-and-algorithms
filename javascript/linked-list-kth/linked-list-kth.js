'use strict';

//kth from the end

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.size++;
    return this.head;
  }

  kthFromEnd(k = 0) {
    if(isNaN(k)) { throw new Error('Invalid argument type'); }
    if(this.size < k || k < 0) { throw new Error('k is out of range'); }
    if(!this.size) { throw new Error('Linklist contains no values'); }
    if(this.size === 1) { return this.head.value; }


    if(this.size === k) { return this.head.value; }

    let current = this.head;
    let res = this.head.value;

    for(let i = 0; i < (this.size - k); i++) {
      res = current.value;
      current = current.next;
    }
    return res;
  }
}


const list = new LinkedList();
list.insert('C');
list.insert('B');
list.insert('A');

// expect 'k is out of range'
try{
  list.kthFromEnd(6);
} catch(e) {
  console.error(e);
}

// expect 'A' or this.head.value
try{
  console.log(list.kthFromEnd(3), '\n');
} catch(e) {
  console.error(e);
}

// expect 'k is out of range'
try{
  list.kthFromEnd(-1);
} catch(e) {
  console.error(e);
}

// expect 'A'
try{
  const shortList = new LinkedList();
  shortList.insert('A');

  console.log(shortList.kthFromEnd(), '\n');
} catch(e) {
  console.error(e);
}

// expect  'B'
try{
  console.log(list.kthFromEnd(1), '\n');
} catch(e) {
  console.error(e);
}
