function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  return dfs(root, root.val);
};

function dfs(node, maxVal) {
  if (!node) {
    return 0;
  }

  maxVal = Math.max(maxVal, node.val);
  let res = node.val === maxVal ? 1 : 0;
  res += dfs(node.left, maxVal);
  res += dfs(node.right, maxVal);
  return res;
}

module.exports = { goodNodes, TreeNode };

/*
https://leetcode.com/problems/count-good-nodes-in-binary-tree/
*/
