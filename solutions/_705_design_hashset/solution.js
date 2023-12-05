class MyHashSet {
  constructor() {
    this.set = new Set();
  }

  add(key) {
    this.set.add(key);
  }

  remove(key) {
    this.set.delete(key);
  }

  contains(key) {
    return this.set.has(key);
  }
}

module.exports = { MyHashSet };

/*
https://leetcode.com/problems/design-hashset/
*/
