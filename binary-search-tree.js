class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val); //Create a new node with the given value

    //If the BST is empty, set the new node as the root
    if(this.root === null) {
      this.root = newNode;
      return this; //Return the BST to allow for method chaining
    }

    let currentNode = this.root; //Start from the root

    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break; //Break the loop after inserting
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break; //Break the loop after inserting
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this; //Return the BST to allow for methos chaining
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // Helper function to insert a new value starting from a given node
    const insertAtNode = (node, val) => {
      if (node === null) {
        //Base case: if current node is null, insert the new node here
        return new Node(val);
      }
      if (val < node.val) {
        node.left = insertAtNode(node.left, val);
      } else {
        node.right = insertAtNode(node.right, val);
      }

      return node; // Return the unchanged node pointer
    }

    //Start the recursive insertion from the root
    this.root = insertAtNode(this.root, val);
    return this; //Allow for method chaining by returning the tree
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (val === currentNode.val) {
        return currentNode; //Found the value, return the node
      } else if (val < currentNode.val) {
        currentNode = currentNode.left; //Move to left child
      } else {
        currentNode = currentNode.right; //Move to right child
      }
    }
    return undefined; //If no node was found, return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // Helper function to search for a value starting from a given node
    const findInNode = (node, val) => {
      if (node === null) {
        return undefined; //Base case: if current node is null, return undefined
      }
      if (val === node.val) {
        return node; //Base case: value found, return the node
      } else if (val < node.val) {
        return findAtNode(node.left, val); //Recursive call on left child
      } else {
        return findAtNode(node.right, val); //Recursive call on right child
      }
    };

    return findInNode(this.root, val) //Start the recursive search from the root
  }


  /** DEPTH FIRST SEARCH */
  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    //Helper function to perform pre-order traversal starting from a given node
    const traversePreOrder = (node) => {
      if (not !== null) {
        visited.push(node.val); //Visit the node
        traversePreOrder(node.left); //Traverse left child
        traversePreOrder(node.right); //Traverse right child
      }
    };

    traversePreOrder(this.root); //Start the traversal from the root
    return visited; //Return the array of visited nodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    // Helper function to perform in-order traversal
    const traverseInOrder = (node) => {
      if (node !== null) {
        traverseInOrder(node.left); //Traverse left child
        visited.push(node.val); //Visit the node
        traverseInOrder(node.right); //Traverse right child
      }
    };

    traverseInOrder(this.root); //Start the traversal from the root
    return visited; //Return the array of visited nodes
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    // Helper function to perform post-order traversal
    const traversePostOrder = (node) => {
      if (node !== null) {
        traversePostOrder(node.left); //Traverse left child
        traversePostOrder(node.right); //Traverse right child
        visited.push(node.val); //Visit the node
      }
    };

    traversePostOrder(this.root); //Start the traversal from the root
    return visited; //Return the array of visited nodes
  }

  /** BREADTH FIRST SEARCH */
  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = []; //Array to store the value of visited nodes
    const queue = []; // Queue to manage the nodes for BFS traversal 

    if (this.root !== null) {
      queue.push(this.root); //Start BFS with the root node
    }

    while (queue.length > 0) {
      const currentNode = queue.shift(); //Dequeue the first node from the queue

      visited.push(currentNode.val); //Visit the current node

      //If the left child exists, enqueue it
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      //If the right child exists, enqueue it
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    return visited; //Return the array of visited nodes
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
