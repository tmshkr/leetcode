function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }

  return res;
};

module.exports = { inorderTraversal, TreeNode };

/*
https://leetcode.com/problems/binary-tree-inorder-traversal/
*/
