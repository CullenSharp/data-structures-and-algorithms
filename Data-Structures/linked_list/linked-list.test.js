'use strict';

//imports
const {LinkedList} = require('./linked-list.js');
const linkedList = new LinkedList();

describe('testing LinkedList and Node classes', () => {

  test('LinkedList constructor creates an instance', () => {
    expect(linkedList).toBeTruthy();
  });

  test('insert adds a new node to the head of LinkedList', () => {
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');

    expect(linkedList.head.value).toEqual('a');
  });
  test('includes returns true if value is in linkedList', () => {
    expect(linkedList.includes('q')).toBeFalsy;
    expect(linkedList.includes('x')).toBeFalsy;
    expect(linkedList.includes(1)).toBeFalsy;
    expect(linkedList.includes('a')).toBeTruthy;
    expect(linkedList.includes('b')).toBeTruthy;
    expect(linkedList.includes('c')).toBeTruthy;
  });
  test('toString returns a string repersentation of linkedList', () => {
    expect(linkedList.toString()).toEqual('{ a } -> { b } -> { c } -> null');
  });

  test('can return the a collection object', () => {
    expect(linkedList.toString()).toEqual('{ a } -> { b } -> { c } -> null');
  });
});
