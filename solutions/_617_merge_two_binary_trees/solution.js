function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (a, b) {
  if (!a && !b) return null;
  if (!a) return b;
  if (!b) return a;

  a.val += b.val;
  a.left = mergeTrees(a.left, b.left);
  a.right = mergeTrees(a.right, b.right);

  return a;
};

module.exports = { mergeTrees, TreeNode };

/*
https://leetcode.com/problems/merge-two-binary-trees/
*/
