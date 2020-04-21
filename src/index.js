class Node {
   constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
   }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addHead(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    } else {
       this.tail = newNode; 
    }
    this.head = newNode;
  }
  
  addTail(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
       this.head = newNode; 
    }
    this.tail = newNode;
  }
  
  removeHead() {
    if (!this.head) { 
      return;
    }
    let value = this.head.value;
    this.head = (this.head) ? this.head.prev = null : this.tail = null;
    return value;
  }
  
  removeTail() {
    if (!this.tail) return;
    let value = this.tail.value;
    this.tail = (this.tail) ? this.tail.next = null : this.tail = null;
    return value;
  }
  
  search(searchValue) {
    let currentNode = this.head;
    while(currentNode){
      if (currentNode.value === searchValue) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  
  indexOf(value) {
    let indexes = [];
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) {
        indexes.push(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return indexes;
  }
}


let LL = new LinkedList();

LL.addHead(1);
LL.addHead(5);
LL.addHead(3);
LL.addTail(5);
LL.addTail(8);
LL.addTail(7);
LL.addTail(5);

console.log(LL.indexOf(5));
