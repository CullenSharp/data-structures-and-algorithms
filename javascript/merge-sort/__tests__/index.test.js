const mergeSort = require('../index');

describe('testing merge sort algorithm', () => {
  test('sort normal array', () => {
    const expectedOutputArray = [4, 8, 15, 16, 23, 42];
    const inputArray = [8, 4, 23, 42, 16, 15];

    mergeSort(inputArray);
    expect(inputArray).toEqual(expectedOutputArray);
  });

  test('reverse sorted array', () => {
    const expectedOutputArray = [-2, 5, 8, 12, 18, 20];
    const inputArray = [20, 18, 12, 8, 5, -2];

    mergeSort(inputArray);
    expect(inputArray).toEqual(expectedOutputArray);
  });

  test('few uniques', () => {
    const expectedOutputArray = [5, 5, 5, 7, 7, 12];
    const inputArray = [5, 12, 7, 5, 5, 7];

    mergeSort(inputArray);
    expect(inputArray).toEqual(expectedOutputArray);
  });

  test('nearly sorted', () => {
    const expectedOutputArray = [2, 3, 5, 7, 11, 13];
    const inputArray = [2, 3, 5, 7, 13, 11];

    mergeSort(inputArray);
    expect(inputArray).toEqual(expectedOutputArray);
  });
});
