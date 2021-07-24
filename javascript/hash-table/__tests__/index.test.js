'use strict'

// 3rd party resources
const { test, expect } = require('@jest/globals')

const HashTable = require('../index')
const hashTable = new HashTable(1024)

test('should return true or false if value is contained in table', () => {
  hashTable.add('fizz', 'buzz')

  expect(hashTable.contains('fizz')).toBeTruthy()
  expect(hashTable.contains('bar')).toBeFalsy()
})

test('adds a value to the hast table', () => {
  hashTable.add('foo', 'bar')

  expect(hashTable.contains('foo')).toBeTruthy()
})

test('should return a value with a given key', () => {
  expect(hashTable.get('foo')).toEqual({ foo: 'bar' })
})

test('should return the index of a given key', () => {
  expect(hashTable.hash('Jacob')).toEqual(201)
})
