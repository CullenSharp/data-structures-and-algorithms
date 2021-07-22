/* eslint-disable no-param-reassign */
function swap(arr, i, low) {
  let temp = 0;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i += 1) {
    if (arr[i] <= pivot) {
      low += 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
}

function quickSort(arr, left, right) {
  if (left < right) {
    const position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
    console.log(arr);
  }
}

module.exports = quickSort;
