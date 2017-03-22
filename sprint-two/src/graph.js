class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor() {
    this._store = {};
  }
  // Add a node to the graph, passing in the node's value.
  addNode(value) {
    this._store[value] = new Node(value);
  }
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  contains(target) {
    return this._store.hasOwnProperty(target)
  }
  // Removes a node from the graph.
  removeNode(node) {
    this.forEachNode((b) => this.removeEdge(node, b))
    delete this._store[node]
  }
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  hasEdge(a, b) {
    return this._store[a].edges.includes(b) && this._store[b].edges.includes(a)
  }
  // Connects two nodes in a graph by adding an edge between them.
  addEdge(a, b) {
    this._store[a].edges.push(b)
    this._store[b].edges.push(a)
  }
  // Remove an edge between any two specified (by value) nodes.
  removeEdge(a, b) {
    this._store[a].edges = this._store[a].edges.filter(edge => edge !== b)
    this._store[b].edges = this._store[b].edges.filter(edge => edge !== a)
  }
  // Pass in a callback which will be executed on each node of the graph.
  forEachNode(callback) {
    for (let key in this._store) {
      callback(Number(key))
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


