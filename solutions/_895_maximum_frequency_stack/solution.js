class FreqStack {
  constructor() {
    this.stack = [];
    this.freq = {};
  }

  push(val) {
    const count = this.freq[val] + 1 || 1;
    this.freq[val] = count;

    if (count > this.stack.length) {
      this.stack.push([val]);
    } else {
      this.stack[count - 1].push(val);
    }
  }

  pop() {
    const val = this.stack.lastElement().pop();
    if (this.stack.lastElement().isEmpty()) {
      this.stack.pop();
    }
    this.freq[val]--;
    return val;
  }
}

module.exports = { FreqStack };

/*
https://leetcode.com/problems/maximum-frequency-stack/
*/

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.lastElement = function () {
  return this[this.length - 1];
};