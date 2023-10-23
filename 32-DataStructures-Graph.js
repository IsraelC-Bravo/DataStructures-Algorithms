//Graph
//A graph is a non-linear data structure that consists of a finite number of vertices(nodes) connected by edges
//Trees are a specific type of graph data structures.

//Types of graphs
//1. Directed
//A graph in which the edges have a direction.
//Edges are usually represented as arrows pointing in the direction the graph can be traversed.
//A->B->C

//2. Undirected
//A graph in which the edges are bidirectional.
//The graph can be traversed in either direction.
//The absence of arrows tells us the graph is undirected.
//A-B-C or C-B-A

//More types of graphs.
//1. Only vortices(nodes) - NO EDGES
//2. Multiple edges from one node
//3. Cycles in the graph
//4. Self Loops on a node
//5. Disconnected nodes
//6. A graph may contain weighs on the egdes, representing the cost of traversing the edge.

//Graph Usage
//Google Maps - Navigation Apps
//Social Media Apps

//Graph Representiation:
//A: Adjacency Matrix
//An Adjacency Matrix is a 2D array of size V x V where V is the nomber of vertices in the graph.
//Each row and column represent a vertex (node)
//If the value of any elemen say, matrix[i][j] is 1, it represents that there is an edge conecting the vertex[i] and vertex[j]

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]);

//B: Adjacency List
//Vertices (nodes) are stored in a map like data structure, and every vertex stores a list of its own adjacent vertices.

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["A"]);

//Adjacency Matrix vs Adjacency List
//With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix we store values irrespective of whether an edge exists or not... Storage wise, an adjacency list is more efficient.
//With an Adjacency List, inserting and finding adjacent nodes is constant time complexity, whereas with adjacency matrix, it is linear complexity.
//Adjacency Lists allows you to store additional values with an edge such as weight of the edge. With an Adjacency Matrix, such information would have to be stored externally.

class Graph {
  constructor() {
    //create the empty map like DS to store the vertices
    this.adjancencyList = {};
  }

  //addVertex() => adds a vertex(node) to the graph
  addVertex(vertex) {
    //check if the vertex exists, if not.. add it as a new set
    if (!this.adjacencyList[vertex]) {
      //use the Set() for better performance, it creates a new entry with key = vertex and the list empty to begin with.
      this.adjacencyList[vertex] = new Set();
    }
  }

  //addEdge() => accepts to vertices as params
  addEdge(vertex1, vertex2) {
    //Check if the vertices exists, if not call the addVertex method to add them
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    //to connect the edges between vertices, use the add() method from the set Data Structure on both vertices.
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  //hasEdge() => checks if there is an edge between the nodes
  hasEdge(vertex1, vertex2) {
    return (
      //use the has method from the Set DS to ensure there is a connection between both vertices.
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  //display() => prints the adjacencyList with all vertices and sub Lists from each vertex
  display() {
    //Loop through the graph
    for (let vertex in this.adjacencyList) {
      //print the vertex with the connection to its own list of adjacent vertices
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}
