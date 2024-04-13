function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) {
    return true;
  }

  const q = [root];

  while (q.length > 0) {
    const node = q.shift();
    if (node == null) break;
    q.push(node.left);
    q.push(node.right);
  }

  return q.every((node) => node === null);
};

module.exports = { isCompleteTree, TreeNode };

/*
https://leetcode.com/problems/check-completeness-of-a-binary-tree/
*/
