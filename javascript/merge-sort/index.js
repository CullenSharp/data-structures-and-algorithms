/* eslint-disable no-param-reassign */
function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k += 1;
  }
  if (i === left.length) {
    arr.concat(right.slice(k, right.length));
  } else {
    arr.concat(left.slice(i, left.length));
  }
//   if i = left.length
//   set remaining entries in arr to remaining values in right
// else
//   set remaining entries in arr to remaining values in left
}

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = n / 2;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
  return arr;
}

module.exports = mergeSort;
