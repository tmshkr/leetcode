function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const res = [];

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};

module.exports = { preorderTraversal, TreeNode };

/*
https://leetcode.com/problems/binary-tree-preorder-traversal/
*/
