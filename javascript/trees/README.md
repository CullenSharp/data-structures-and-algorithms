# Trees

July 2nd, 2021

The goal here is to create a binary tree class using nodes with search functionality. What I mean is that we create a method on the class that takes a value and searches the tree's contents to find the value. Return true if the value is found.

A tree is – more specifically a [binary tree](https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f) – a data structure with a root, branches, edges, and leaves. The root is a node with two children, hence the name binary. Left and right are your only two choices to follow. Each node has their own branches, called edges, which connect to other nodes. At the end of the branches are leaves, a special node without any connections.

![tree data structure](https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png)

Let's pseudo code this out

```JS
// the node has a value and children
// each child has a more children on the left or right
// and they have values

class Node {
  //we'll need a value to make sure the node holds some information
  constructor(value){
    this.value = value;
    this.left = null
    this.right = null
  }
}

// the tree has a root node
// this is connected to other nodes... etc and etc


class Tree {
  constructor() {
    // the root is a node here
    // we'll start with null, because we don't know when or what the root will contain
    // this keeps us general
    this.root = null
  }
}
```

<!-- Maybe I don't really understand how pseudo code is meant to work... 🤔 -->

Again a tree is composed of nodes, and before we can add things to the tree, we need to know what a node *is*.

We'll need to either create an insertion method or just literally add values to the tree like so:

```JS
tree.root.left = node
tree.root.right = node
tree.root.left.left = node
tree.root.left.right = node
tree.root.right.left = node
tree.root.right.right = node
```

This should do the trick, but its messy. I mean why would we want to optimize too early, so just do this unless someone looks.

Okay, 🎶  *lets get down to business* 🎵. We'll now write the search algorithm! You have breadth first searches and depth first searches, which should you use? I'll be frank... I don't know. Each one should solve with O(n) in the worst case and Ω(1) in the best case. What that means is that in the best case you find the value immediately, because it's the root value. If the value isn't in the tree, then you'd have to search the whole tree leading to O(n). 'N' here is the the number of elements in the tree.

We'll implement a depth-first search, because I want to... deal with it 😤.

The beauty of the binary tree is that it's recursive by nature, which allows us to do some fun things without needing extra space.

```JS
//first provide a value to the algorithm
includes(value) {
  //we'll have a guard clause that returns true the value back if it's in the root
  if(this.root.value === value) { return true; }

  //if you can't find it, we'll its a little deeper
  //we'll create a helper function here

  const walk = (node) => {
    //we're looking at the nodes value here
    //again a guard clause 
    if(node.value === value){ return true; }

    //and since this is a pre-order search
    //we'll hug the left
    if(node.left){walk(node.left)}
    if(node.right){walk(node.right)}

    console.log(node.value)
  }

  //we'll start the search
  walk(this.root)

  //finally if the value isn't found
  //return false
  return false;
}
```

## Whiteboard



## Approach and Efficiency

The best case efficiency is `Ω(1)` if the value is in the root, otherwise it's `O(n)`. And `O(1)` in extra space.
