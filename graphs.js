class Graph {
  constructor() {
    this.adjacecyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacecyList[vertex]) this.adjacecyList.push({ vertex: [] });
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
}
