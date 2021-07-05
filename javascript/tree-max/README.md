# Trees

July 5nd, 2021

The goal here is to create a method on the binary tree class that returns the greatest number contained within. If the tree contains 0,2,5,6,20, the algorithm will traverse the tree and return 20.

A tree is – more specifically a [binary tree](https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f) – a data structure with a root, branches, edges, and leaves. The root is a node with two children, hence the name binary. Left and right are your only two choices to follow. Each node has their own branches, called edges, which connect to other nodes. At the end of the branches are leaves, a special node without any connections.

![tree data structure](https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png)

## Algorithm

1. Define a variable to hold our result
1. Traverse the entire tree
1. If a node's value is greater than our result variable, result becomes that node's value
1. Otherwise leave the variable alone
1. Continue until all values have been checked
1. Return our result variable

## Pseudocode

```JS
  // this algorithm will find the greatest value contained in the tree and return it
  // procedure findMax()
    // declare a variable to hold the result from our algorithm
    // declared as 0, so we know that's always a number
    // res <- 0

    // next we'll create a workhorse function that will allow us to
    // recursively traverse the nodes in our tree
    // procedure walk(node)
      // if res < node's value
        // res = node.value

      // else leave res unchanged

      // if node.left is truthy
        // walk(node.left)
      
      // if node.right is truthy
        // walk(node.right)
    
    // start recursion at the root of our tree
    // walk(this.root)

    // return res
```

## Code

```JS
findMax() {
  // guard clauses prevents non numbers
  if( isNaN(this.root.value) ){ throw new Error('Tree contains non numbers'); }

  let res = 0;
  const walk = (node) => {
    if( isNaN(node.value) ){ throw new Error('Tree contains non numbers'); }

    res < node.value ? res = node.value : res;
    if(node.left){ walk(node.left); }
    if(node.right){ walk(node.right); }
  };
  walk(this.root);
  return res;
}
```

## Whiteboard

![UML](UML.png)

## Approach and Efficiency

The best case efficiency is `O(n)` as we'll always need to check every single value. And `O(1)` in extra space.
