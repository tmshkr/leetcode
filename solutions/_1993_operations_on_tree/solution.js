class LockingTree {
  constructor(parent) {
    this.parent = parent;
    this.locked = new Array(parent.length);
    this.children = parent.map((_) => []);
    for (let i = 0; i < parent.length; i++) {
      const p = parent[i];
      if (p !== -1) {
        this.children[p].push(i);
      }
    }
  }

  lock(num, user) {
    if (this.locked[num]) {
      return false;
    }
    this.locked[num] = user;
    return true;
  }

  unlock(num, user) {
    if (this.locked[num] != user) {
      return false;
    }
    this.locked[num] = null;
    return true;
  }

  upgrade(num, user) {
    let i = num;
    while (i !== -1) {
      if (this.locked[i]) {
        return false;
      }
      i = this.parent[i];
    }

    let count = 0;
    const q = [num];
    while (q.length) {
      const n = q.shift();
      if (this.locked[n]) {
        this.locked[n] = null;
        count++;
      }
      q.push(...this.children[n]);
    }

    if (count > 0) {
      this.locked[num] = user;
    }

    return count > 0;
  }
}

module.exports = { LockingTree };

/*
https://leetcode.com/problems/operations-on-tree/
*/
