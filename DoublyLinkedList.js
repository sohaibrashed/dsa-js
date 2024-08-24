console.log("Running doubly linked list...");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  deleteTail() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return removedNode.data;
  }

  deleteHead() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return removedNode.data;
  }

  remove(data) {
    if (this.isEmpty()) return null;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        break;
      }
      current = current.next;
    }
    return null;
  }

  display() {
    if (this.isEmpty()) return null;
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const doubly = new DoublyLinkedList();

doubly.append(1);
doubly.append(2);
doubly.append(3);
doubly.append(4);
doubly.append(5);
doubly.append(6);

doubly.deleteHead();
doubly.deleteTail();

doubly.remove(4);
doubly.display();
