/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  const res = [root.val];
  function dfs(root) {
    if (!root) return 0;

    const leftMax = Math.max(dfs(root.left), 0);
    const rightMax = Math.max(dfs(root.right), 0);

    res[0] = Math.max(res[0], root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return res[0];
};

module.exports = { maxPathSum };

/*
https://leetcode.com/problems/binary-tree-maximum-path-sum/
*/
