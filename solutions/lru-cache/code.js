class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map();

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
  }

  insert(node) {
    const prev = this.right.prev;
    const next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  get(key) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
      this.insert(this.cache.get(key));
      return this.cache.get(key).val;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    this.cache.set(key, new Node(key, value));
    this.insert(this.cache.get(key));

    if (this.cache.size > this.cap) {
      const lru = this.left.next;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

module.exports = { LRUCache };
