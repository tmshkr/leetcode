/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  return Math.max(...dfs(root));

  function dfs(node) {
    if (!node) return [0, 0];
    const left = dfs(node.left);
    const right = dfs(node.right);
    return [
      node.val + left[1] + right[1],
      Math.max(...left) + Math.max(...right),
    ];
  }
};

module.exports = { rob };

/*
https://leetcode.com/problems/house-robber-iii/
*/
