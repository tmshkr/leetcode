class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.dfs(root);
  }

  hasNext() {
    return this.stack.length > 0;
  }

  next() {
    const node = this.stack.pop();
    this.dfs(node.right);
    return node.val;
  }

  dfs(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}

module.exports = { BSTIterator };

/*
https://leetcode.com/problems/binary-search-tree-iterator/
*/
