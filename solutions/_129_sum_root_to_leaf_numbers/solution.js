function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0);

  function dfs(node, sum) {
    if (!node) return 0;
    sum = sum * 10 + node.val;
    return node.left || node.right
      ? dfs(node.left, sum) + dfs(node.right, sum)
      : sum;
  }
};

module.exports = { sumNumbers, TreeNode };

/*
https://leetcode.com/problems/sum-root-to-leaf-numbers/
*/
