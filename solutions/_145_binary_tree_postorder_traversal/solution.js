function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const res = [];

  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return res;
};

module.exports = { postorderTraversal, TreeNode };

/*
https://leetcode.com/problems/binary-tree-postorder-traversal/
*/
