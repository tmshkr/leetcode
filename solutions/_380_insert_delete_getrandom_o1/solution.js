class RandomizedSet {
  constructor() {
    this.set = new Set();
  }

  insert(val) {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  }

  remove(val) {
    if (!this.set.has(val)) {
      return false;
    }
    this.set.delete(val);
    return true;
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.set.size);
    const iterator = this.set.values();
    for (let i = 0; i < randomIndex; i++) {
      iterator.next();
    }
    return iterator.next().value;
  }
}

module.exports = { RandomizedSet };

/*
https://leetcode.com/problems/insert-delete-getrandom-o1/
*/
