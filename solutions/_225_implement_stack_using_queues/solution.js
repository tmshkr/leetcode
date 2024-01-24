class MyStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length === 0;
  }
}

module.exports = { MyStack };

/*
https://leetcode.com/problems/implement-stack-using-queues/
*/
