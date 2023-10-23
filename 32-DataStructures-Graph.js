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
