class Node {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  size = 19997;
  mult = 12582917;
  constructor() {
    this.map = new Array(this.size);
  }

  hash(key) {
    return (key * this.mult) % this.size;
  }

  put(key, val) {
    this.remove(key);
    const h = this.hash(key);
    const node = new Node(key, val, this.map[h]);
    this.map[h] = node;
  }

  get(key) {
    const h = this.hash(key);
    let node = this.map[h];
    while (node) {
      if (node.key === key) {
        return node.val;
      }
      node = node.next;
    }
    return -1;
  }

  remove(key) {
    const h = this.hash(key);
    let node = this.map[h];
    if (!node) return;
    if (node.key === key) {
      this.map[h] = node.next;
    } else {
      while (node.next) {
        if (node.next.key === key) {
          node.next = node.next.next;
          return;
        }
        node = node.next;
      }
    }
  }
}

/*
https://leetcode.com/problems/design-hashmap/
*/

module.exports = { MyHashMap };
