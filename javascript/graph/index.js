
'use strict';

/**
 * Creates a new vertex
 */
class Vertex {
  /**
   * @constructor
   * @param {*} value
   */
  constructor(value) {
    this.value = value;
  }
}

/**
 * Constructs a new edge with a vertex and weight
 */
class Edge {
  /**
   * @constructor
   * @param {object} vertex
   * @param {int} weight
   */
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

/**
 * Creates a new graph class
 */
class Graph {
  /**
   * @constructor
   */
  constructor() {
    this.adjacencyList = new Map();
  }

  /**
   * adds a new vertex to the graph
   * @method
   * @param {*} value
   * @return {object} vertex
   */
  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  /**
   * Adds a new edge between two vertices
   * @method
   * @param {object} startVertex
   * @param {object} endVertex
   * @param {int} weight
   */
  addEdge(startVertex, endVertex, weight = 0) {
    const {adjacencyList} = this;
    if (!adjacencyList.has(startVertex) || !adjacencyList.has(endVertex)) {
      throw Error('invalid vertices');
    }

    // grabs the adjacency list from the vertex
    const listOfEdges = this.adjacencyList.get(startVertex);
    listOfEdges.push(new Edge(endVertex, weight));
  }

  /**
   * Returns a collection of all vertices in the graph
   * @method
   * @return {map}
   */
  getNodes() {
    return this.adjacencyList;
  }

  /**
   * Returns a collection of a given vertex's neighbors
   * @method
   * @param {object} node
   * @return {map}
   */
  getNeighbors(node) {
    return [...this.adjacencyList.get(node)];
  }

  /**
   * Returns the number of vertices in the graph
   * @method
   * @return {int}
   */
  size() {
    return this.adjacencyList.size || null;
  }

  /**
   * Traverses the graph breadth first
   * @param {object} start
   */
  breadthFirst(start) {
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
  }
}

module.exports = {
  Graph,
  Vertex,
  Edge,
};
