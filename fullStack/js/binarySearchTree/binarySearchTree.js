class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BalancedBST {
  constructor() {
    this.root = null;
  }

  buildTree(sortedArray) {
    if (!sortedArray.length) return null;
    this.root = this.buildTreeRecursive(sortedArray, 0, sortedArray.length - 1);
  }

  buildTreeRecursive(arr, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTreeRecursive(arr, start, mid - 1);
    node.right = this.buildTreeRecursive(arr, mid + 1, end);

    return node;
  }

  insert(value) {
    this.root = this.insertRecursive(this.root, value);
  }

  insertRecursive(node, value) {
    if (node === null) return new Node(value);

    if (value < node.value) {
      node.left = this.insertRecursive(node.left, value);
    } else {
      node.right = this.insertRecursive(node.right, value);
    }

    return node;
  }

  deleteItem(value) {
    this.root = this.deleteRecursive(this.root, value);
  }

  deleteRecursive(node, value) {
    if (node === null) return node;

    if (value < node.value) {
      node.left = this.deleteRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteRecursive(node.right, value);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      node.value = this.minValue(node.right);
      node.right = this.deleteRecursive(node.right, node.value);
    }

    return node;
  }

  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  find(value) {
    return this.findRecursive(this.root, value);
  }

  findRecursive(node, value) {
    if (node === null || node.value === value) return node;

    if (value < node.value) {
      return this.findRecursive(node.left, value);
    } else {
      return this.findRecursive(node.right, value);
    }
  }

  height(node = this.root) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1; // adding one for the root node height
  }

  depth(node) {
    return this.depthRecursive(this.root, node);
  }

  depthRecursive(current, node, depth = 0) {
    if (current === null) return -1;
    if (current === node) return depth;

    const leftDepth = this.depthRecursive(current.left, node, depth + 1);
    if (leftDepth !== -1) return leftDepth;

    return this.depthRecursive(current.right, node, depth + 1);
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  inOrder(callback, node = this.root, result = []) {
    if (node) {
      this.inOrder(callback, node.left, result);

      if (callback) {
        callback(node);
      } else {
        result.push(node.value);
      }
      this.inOrder(callback, node.right, result);
    }

    if (!callback) return result;
  }

  rebalance() {
    const values = this.inOrder();
    this.root = this.buildTreeRecursive(values, 0, values.length - 1);
  }

  //   Utility function to print the tree (in-order traversal)
  printTree(node = this.root) {
    if (!node) return;
    this.printTree(node.left);
    console.log(node.value);
    this.printTree(node.right);
  }
}
