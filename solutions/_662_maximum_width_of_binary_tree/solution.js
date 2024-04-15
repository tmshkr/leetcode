function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  const start = [0];
  let max = 0;

  dfs(root, 0, 0);
  return max;

  function dfs(node, level, pos) {
    if (!node) return;
    if (start[level] === undefined) start.push(pos);

    const diff = pos - start[level];
    max = Math.max(max, diff + 1);

    dfs(node.left, level + 1, diff * 2);
    dfs(node.right, level + 1, diff * 2 + 1);
  }
};

module.exports = { widthOfBinaryTree, TreeNode };

/*
https://leetcode.com/problems/maximum-width-of-binary-tree/
*/
