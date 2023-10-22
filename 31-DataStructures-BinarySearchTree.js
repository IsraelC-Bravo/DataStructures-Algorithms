//Binary Tree
//A binary tree is a tree data structure in which each node has at most two children.
//They are referred as left child and right child.

//Binary Search Tree
//The value of each left node must be smaller than the parent node.
//The value of each right node must be greater than the parent node.
//Each node has at most two children.

//Binary Search Tree Operations:
//1. Insertion - To add a node to the tree
//2. Search - To find a node given its value
//3. DFS(Depth Frist Seach) & BFS(Breadth Fist Search) - To visit all nodes in a tree.
//4. Deletion - To remove a node given its value.

class Node {
  constructor(value) {
    this.value = value;
    //set left and right pointers to null
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    //set root pointer to null
    this.root = null;
  }

  //isEmpty() => returns true / false if the tree is empty
  isEmpty() {
    return this.root === null;
  }

  //insert() => create a new node to be added to the tree
  insert(value) {
    //create a newNode by initiating the Node class
    const newNode = new Node(value);
    //If there are no nodes
    if (this.isEmpty()) {
      //set the root pointer to the newNode
      this.root = newNode;
    } else {
      //call the insertNode method and pass in the root pointer and the newNode value. This will call the method recursively.
      this.insertNode(this.root, newNode);
    }
  }

  //insertNode() => it handles where the newNode should be inserted
  insertNode(root, newNode) {
    //check if the newNode value is smaller than the root node value
    if (newNode.value < root.value) {
      //If so... check if the left child is empty
      if (root.left === null) {
        //If so... insert the newNode as the left child
        root.left = newNode;
      } else {
        //else, recursively call the inserNode method to see the depth of the insertion and keep checking if this newNode will be a left or right child
        this.insertNode(root.left, newNode);
      }
    } else {
      //If the newNode value is greater than the root value node, and if the right child node is empty
      if (root.right === null) {
        //pass the newNode as the right child
        root.right = newNode;
      } else {
        //esle, keep recursively calling the insertNode method to see the depth of the insertion and keep checking if this newNode will be a left or right child
        this.insertNode(root.right, newNode);
      }
    }
  }
}

//test code

const bst = new BinarySearchTree();
console.log("This tree is empty ", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
