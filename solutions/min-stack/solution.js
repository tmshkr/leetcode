class MinStack {
  constructor() {
    this.head = null;
  }

  push(val) {
    this.head = !this.head
      ? new Node(val, val, null)
      : new Node(val, Math.min(val, this.head.min), this.head);
  }

  pop() {
    this.head = this.head.next;
  }

  top() {
    return this.head.val;
  }

  getMin() {
    return this.head.min;
  }
}

class Node {
  constructor(val, min, next) {
    this.val = val;
    this.min = min;
    this.next = next;
  }
}

module.exports = { MinStack };
