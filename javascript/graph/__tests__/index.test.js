const {test, expect} = require('@jest/globals');
const {Graph, Vertex, Edge} = require('../index');

test('Vertex can be added', () => {
  const graph = new Graph();
  const expected = new Map();

  const vertex = new Vertex('foo');
  expected.set(vertex, []);

  graph.addVertex('foo');
  expect(graph.adjacencyList).toEqual(expected);
});

test('Edge can be added to graph', () => {
  const graph = new Graph();

  const start = graph.addVertex('foo');
  const end = graph.addVertex('bar');
  const expected = new Edge(end);

  graph.addEdge(start, end);
  expect(graph.getNeighbors(start)[0]).toEqual(expected);
});

test('A collection of all vertices will be retrieved', () => {
  const graph = new Graph();

  graph.addVertex('foo');

  const vertex = new Vertex('foo');
  const expected = new Map();
  expected.set(vertex, []);

  expect(graph.getNodes()).toEqual(expected);
});

test('Should retrieve all appropriate neighbors', () => {
  const graph = new Graph();

  const start = graph.addVertex('fizz');
  const end = graph.addVertex('buzz');

  graph.addEdge(start, end);

  const edge = new Edge(end);
  const expected = [edge];

  expect(graph.getNeighbors(start)).toEqual(expected);
});

test('Returns a proper size', () => {
  const graph = new Graph();
  graph.addVertex('fizz');

  const expected = 1;

  expect(graph.size()).toEqual(expected);
});

test('Returns null on empty graph', () => {
  const graph = new Graph();

  const expected = null;

  expect(graph.size()).toEqual(expected);
});
