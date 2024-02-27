class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get(index) {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr ? curr.val : -1;
  }

  addAtHead(val) {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  addAtTail(val) {
    if (this.tail) {
      const node = new ListNode(val);
      this.tail.next = node;
      this.tail = node;
    } else {
      this.addAtHead(val);
    }
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1 && curr; i++) {
      curr = curr.next;
    }
    if (!curr) return;
    const node = new ListNode(val);
    node.next = curr.next;
    curr.next = node;
    if (curr === this.tail) {
      this.tail = node;
    }
  }

  deleteAtIndex(index) {
    if (index === 0) {
      if (!this.head) return;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1 && curr; i++) {
      curr = curr.next;
    }
    if (!curr || !curr.next) return;
    curr.next = curr.next.next;
    if (!curr.next) {
      this.tail = curr;
    }
  }
}

module.exports = { MyLinkedList };

/*
https://leetcode.com/problems/design-linked-list/
*/
