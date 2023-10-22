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

  //search() => check if a value exists in a tree.
  search(root, value) {
    //empty tree
    if (!root) {
      return false;
    } else {
      //if root value = given value
      if (root.value === value) {
        return true;
        //check if the value is smaller than the root value
      } else if (value < root.value) {
        //search the left sub-tree by recursively call search
        return this.search(root.left, value);
      } else {
        //search the left sub-tree by recursively call search
        return this.search(root.right, value);
      }
    }
  }

  //Depth First Seach (DFS) methods:
  //starting at the root node, traverse all nodes left - right
  //Preorder Traversal Pseudo Code:
  //1. Read the data of the node
  //2. Visit the left subtree
  //3. Visit the right subtree
  preOrder(root) {
    //if the tree is not empty
    if (root) {
      //read the root node value
      console.log(root.value);
      //then visit all left sub tree nodes
      this.preOrder(root.left);
      //when that is done, visit all right sub tree nodes
      this.preOrder(root.right);
    }
  }

  //In Order Traversal Pseudo Code:
  //1. Visit the left subtree
  //2. Read the data of the node
  //3. Visit the right subtree
  inOrder(root) {
    if (root) {
      //visit all left sub tree nodes in order
      this.inOrder(root.left);
      //read the value
      console.log(root.value);
      //visit all right sub tree nodes in order
      this.inOrder(root.right);
    }
  }

  //Post Order Pseudo Code:
  //1. Visit the left subtree
  //2. Visit the right subtree
  //3. Read the data of the node
  postOrder(root) {
    if (root) {
      //visit all left subtree nodes
      this.postOrder(root.left);
      //visit all right subtree nodes
      this.postOrder(root.right);
      //read the data of the node
      console.log(root.value);
    }
  }

  //Breadth First Search:
  //Explore all nodes at the present depth prior to moving on to the next nodes at the next level
  //BFS Traversal Pseudo Code:
  //1. Create a queue
  //2. Enqueue the root node
  //3. As long as te node exists in the queue
  //a. Dequeue the node from front
  //b. Read the node's value
  //c. Enqueue the node's left child if it exists
  //d. Enqueue the node's right child if it exists
  levelOrder() {
    //Use the optimsed queue implementation
    const queue = [];
    //push the root node to the queue
    queue.push(this.root);
    //while there are values in the queue
    while (queue.length) {
      //Create a temp variable "curr" to store the access the front value from the queue
      let curr = queue.shift();
      //log the value
      console.log(curr.value);
      //if there is a left child nodes, push it into the queue
      if (curr.left) {
        queue.push(curr.left);
      }
      //if there is a right child node, push it into the queue
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  //min() => used to find the left most leaf node which contains the min value in the tree
  min(root) {
    //If the root node doesn't have any left child nodes
    if (!root.left) {
      //return the value at root node
      return root.value;
    } else {
      //else, recursively traverse the left child nodes until the last one
      return this.min(root.left);
    }
  }

  //max() => used to find the right most leaf node which contains the max value in the tress
  max(root) {
    //If the root node doesn't have any right child nodes
    if (!root.right) {
      //return the value at root node
      return root.value;
    } else {
      //else, recursively traverse the left child nodes until the last one
      return this.max(root.right);
    }
  }
}

//test code

const bst = new BinarySearchTree();
console.log("This tree is empty ", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
