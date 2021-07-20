/* eslint-disable no-param-reassign */

// InsertionSort(int[] arr)
// FOR i = 1 to arr.length

//   int j <-- i - 1
//   int temp <-- arr[i]

//   WHILE j >= 0 AND temp < arr[j]
//     arr[j + 1] <-- arr[j]
//     j <-- j - 1

//   arr[j + 1] <-- temp

//  takes [8, 4, 23, 42, 16, 15]
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let j = i - 1; // 0
    const temp = arr[i]; // 8

    while (j >= 0 && temp < arr[j]) { // j = 0 && 4 < 8
      arr[j + 1] = arr[j]; // [8, 4] -> [4, 4]
      j -= 1; // -1 breaks loop
    }
    arr[j + 1] = temp; // arr[-1 + 1] = 8
  }
  return (arr);
}

module.exports = insertionSort;
