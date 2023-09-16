function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function dfs(root) {
    if (!root) {
      return [true, 0];
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
};

module.exports = { isBalanced, TreeNode };

/*
https://leetcode.com/problems/balanced-binary-tree/
*/
