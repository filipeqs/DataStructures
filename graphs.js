class Graph {
    constructor() {
        this.adjagecyList = {};
    }

    addVertex(vertex) {
        if (!this.adjagecyList[vertex])
            this.adjagecyList.push({ vertex: [] });
    }
}