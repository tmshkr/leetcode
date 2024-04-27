/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  dfs(root, 0);
  return root;

  function dfs(node, sum) {
    if (node === null) return sum;
    node.val += dfs(node.right, sum);
    return dfs(node.left, node.val);
  }
};

module.exports = { convertBST };

/*
https://leetcode.com/problems/convert-bst-to-greater-tree/
*/
