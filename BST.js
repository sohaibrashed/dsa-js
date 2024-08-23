console.log("Running BST File...");

class TreeNode {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    const newNode = new TreeNode(data);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node, newNode) {
    if (newNode.data >= node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    }
  }

  remove(data) {
    if (this.isEmpty()) return null;
    this.root = this.#removeNode(this.root, data);
  }

  #removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.#removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.#removeNode(node.right, data);
      return node;
    } else {
      // Node to be deleted is found

      // Case 1: Node has no children (leaf node)
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: Node has only one child
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      // Case 3: Node has two children
      // Find the minimum node in the right subtree (in-order successor)
      const minNode = this.#findMinNode(node.right);
      node.data = minNode.data; // Replace the node's data with the minNode's data
      node.right = this.#removeNode(node.right, minNode.data); // Delete the in-order successor
      return node;
    }
  }

  #findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  search(data) {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.#searchNode(this.root, data);
    }
  }

  #searchNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data > node.data) {
      this.#searchNode(node.right, data);
    } else if (data < node.data) {
      this.#searchNode(node.left, data);
    } else {
      console.log("Data Found");
      return node;
    }
  }

  inOrder(root = this.root, result = []) {
    if (root !== null) {
      this.inOrder(root.left, result);
      result.push(root.data);
      this.inOrder(root.right, result);
    }
    return result;
  }

  preOrder(root = this.root, result = []) {
    if (root !== null) {
      result.push(root.data);
      this.inOrder(root.left, result);
      this.inOrder(root.right, result);
    }
    return result;
  }

  postOrder(root = this.root, result = []) {
    if (root !== null) {
      this.inOrder(root.left, result);
      this.inOrder(root.right, result);
      result.push(root.data);
    }
    return result;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7)); // Output: TreeNode { data: 7, left: null, right: null }
console.log(bst.search(20)); // Output: null

bst.inOrder(); // Output: 3 5 7 10 15
