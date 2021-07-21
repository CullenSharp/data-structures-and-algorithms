# Merge Sort

`July 20, 2021`

## 🚀 Getting Started

1. Install dependencies with `npm i` or `yarn i`
2. Run tests with `npm test`

## 🌎 Overview

Merge is one of the more efficient sorting algorithms with *O(n ㏒ n)*. It works by dividing the list into its the smallest possible unit. These units are then compared and sorted. The result is compared with the adjacent unit and merged. This runs until all sub-lists have been merged.

## 🛠 Pseudo Code

```JS
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## 🚶 Walk Through

We'll walk through a solution for [8,4,23,42,16,15]. We grab a reference to the length of the input array with `n`. In this case n = 6. If n is greater than 1 (i.e. the input array contains more than one element), find the middle at n/2 and split the array into 2 halves. mergeSort is then recursively called on each half, eventually leading to array being split into its smallest parts (1 element).

```JS
ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

A helper function we'll call `merge` handles the comparisons and merging. the algorithm takes in two halves(left/right) and their unsorted combination. Every element is then compared against it's adjacent values and sorted. The two sorted sub-lists are then merged.

## ⚙️ Efficiency

Time-complexity: O(n ㏒ n)

Space-complexity: O(1)
