class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.head = null;
    this.tail = null;
    this.capacity = k;
    this.size = 0;
  }

  enQueue(val) {
    if (this.isFull()) {
      return false;
    }

    const node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    this.head = this.head.next;
    this.size--;

    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.head.val;
  }

  Rear() {
    return this.isEmpty() ? -1 : this.tail.val;
  }

  isEmpty() {
    return this.size == 0;
  }

  isFull() {
    return this.capacity == this.size;
  }
}

module.exports = { MyCircularQueue };

/*
https://leetcode.com/problems/design-circular-queue/
*/
