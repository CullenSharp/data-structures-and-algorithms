const Graph = require('../index');

/**
 * Traverses the graph breadth first
 * @param {object} start
 */
Graph.breadthFirst = function(start) {
  const queue = [];
  const visited = new Set();

  queue.push(start);
  visited.add(start);

  while (queue.length) {
    const neighbors = this.adjacencyList.get(queue[0]);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      } else {
        continue;
      }
    }
    console.log(queue.shift().value);
  }
};
