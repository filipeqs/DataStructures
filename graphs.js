class Graph {
  constructor() {
    this.adjacecyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacecyList[vertex]) this.adjacecyList[vertex] = [];
  }

  addEdge(vertextOne, vertextTwo) {
    this.adjacecyList[vertextOne].push(vertextTwo);
    this.adjacecyList[vertextTwo].push(vertextOne);
  }

  removeEdge(vertextOne, vertextTwo) {
    this.adjacecyList[vertextOne] = this.adjacecyList[vertextOne].filter(
      (v) => v !== vertextTwo
    );
    this.adjacecyList[vertextTwo] = this.adjacecyList[vertextTwo].filter(
      (v) => v !== vertextOne
    );
  }

  removeVertex(vertex) {
    const vertices = this.adjacecyList[vertex];
    for (let i = 0; i < vertices.length; i++) {
      const adjacentVertext = vertices[i];
      this.removeEdge(vertex, adjacentVertext);
    }

    delete this.adjacecyList[vertex];
  }

  DFSRecursive(vertex) {
    const result = [];
    const visited = {};

    const DFS = (vertex) => {
      if (!vertex) return;

      result.push(vertex);
      visited[vertex] = true;

      const vertices = this.adjacecyList[vertex];
      vertices.forEach((vertice) => {
        if (!visited[vertice]) DFS(vertice);
      });
    };

    DFS(vertex);
    return result;
  }

  DFSIterative(start) {
    const stack = [];
    const visited = {};
    const result = [];
    let currentVertex;

    stack.push(start);
    while (stack.length) {
      currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);

        const neighbors = this.adjacecyList[currentVertex];
        neighbors.forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }

    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      const vertices = this.adjacecyList[currentVertex];
      vertices.forEach((vertice) => {
        if (!visited[vertice]) {
          visited[vertice] = true;
          queue.push(vertice);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
