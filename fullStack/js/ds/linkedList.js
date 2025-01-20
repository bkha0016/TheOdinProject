class Node {
  constructor(value) {
    this.value = value; // The data stored in the node
    this.next = null; // A reference to the next node in the list
  }
}

class LinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list
    this.length = 0; // The number of nodes in the list
  }

  //   Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //   prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  //   size returns the total number of nodes in the list
  size() {
    return this.length;
  }

  //   head returns the first node in the list
  head() {
    return this.head;
  }
  //   tail returns the last node in the list
  tail() {
    return this.tail;
  }
  //   at(index) returns the node at the given index
  at(index) {
    let currentNode = this.head;
    let count = 0;

    while (count <= this.length) {
      if (count == index) {
        return console.log(currentNode.value);
      }

      if (currentNode == null) {
        return console.log(-1);
      }

      currentNode = currentNode.next;
      count++;
    }
  }

  //   find(value) returns the index of the node containing value, or null if not found
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return null;
  }

  //   pop removes the last element from the list
  pop() {
    if (!this.head) return null; // If the list is empty, return null

    if (this.length === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }

    const value = currentNode.next.value;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;

    return value;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  toString() {
    let currentNode = this.head;
    let list = [];
    while (currentNode != null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(list.join(" -> "));
  }
}

let newList = new LinkedList();
newList.append(5);
newList.append(3);
newList.append(4);
newList.append(7);
newList.pop();
newList.at(10);
newList.append(8);
console.log(newList.contains(8));
console.log(newList.contains(12));
newList.toString();
