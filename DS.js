console.log("Running (DS.js) file in the console");

//=========================================================
// Implement a Class Hierarchy
//=========================================================

// class Shape {
//   color;
//   constructor(color) {
//     this.color = color;
//   }

//   getArea() {
//     console.log("No shape");
//   }

//   toString() {
//     console.log("the color of the shape is: " + this.color);
//   }
// }

// class Circle extends Shape {
//   #radius;
//   constructor(color, radius) {
//     super(color);
//     this.#radius = Number(radius);
//   }

//   get getRadius() {
//     return `Radius of the Circle is ${this.#radius}`;
//   }

//   set setRadius(radius) {
//     this.#radius = radius;
//   }

//   getArea() {
//     console.log(`Area of the Circle is: ${Math.PI * this.#radius ** 2}`);
//   }

//   toString() {
//     console.log("the color of the Circle is: " + this.color);
//   }
// }

// class Rectangle extends Shape {
//   _height;
//   _width;

//   constructor(color, height, width) {
//     super(color);
//     this._height = height;
//     this._width = width;
//   }

//   getArea() {
//     console.log(`Area of the Rectangele is: ${this._width * this._height}`);
//   }

//   toString() {
//     console.log("the color of the Rectangle is: " + this.color);
//   }
// }

// const obj1 = new Shape("red");
// console.log(obj1.color);
// obj1.getArea();
// obj1.toString();

// const circle1 = new Circle("Blue", 180);
// console.log(circle1.getRadius);
// circle1.setRadius = 10;
// console.log(circle1.getRadius);
// circle1.getArea();
// circle1.toString();

// const rec1 = new Rectangle("pink", 10, 10);

// rec1.getArea();
// rec1.toString();

//=========================================================
//=========================================================

//=========================================================
// Binary Search
//=========================================================

function BinarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

//=========================================================
// Linear Search
//=========================================================

function linearSearch(arr, target) {
  for (let element of arr) {
    if (element === target) {
      return "found";
    }
  }
  return "not found";
}

//=========================================================
//  Singly LinkedList
//=========================================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    return this.length;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  removeHead() {
    if (this.isEmpty()) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.size() === 0) this.tail = null;
    return removedNode;
  }

  removeTail() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    const removeNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return removeNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.printList(); // Output: 1 2 3 4
console.log("Deleted:", list.removeTail().value); // Output: 4
list.printList(); // Output: 1 2 3
console.log("Deleted:", list.removeTail().value);
