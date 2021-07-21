const mergeSort = require('../index');

describe('testing merge sort algorithm', () => {
  test('sort normal array', () => {
    const expectedOutputArray = [4, 8, 15, 16, 23, 42];
    const inputArray = [8, 4, 23, 42, 16, 15];

    expect(mergeSort(inputArray)).toEqual(expectedOutputArray);
  });
});

// [8,4,23,42,16,15]

// For your own understanding, consider also stepping through these inputs:

// Reverse-sorted: [20,18,12,8,5,-2]
// Few uniques: [5,12,7,5,5,7]
// Nearly-sorted: [2,3,5,7,13,11]
