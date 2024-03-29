function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let prev = null;
  let minDiff = Infinity;

  function inOrder(node) {
    if (!node) return;

    inOrder(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;

    inOrder(node.right);
  }

  inOrder(root);
  return minDiff;
};

module.exports = { minDiffInBST, TreeNode };

/*
https://leetcode.com/problems/minimum-distance-between-bst-nodes/
*/
