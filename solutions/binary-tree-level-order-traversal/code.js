function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  const q = [];
  if (root) {
    q.push(root);
  }

  while (q.length) {
    const val = [];
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      val.push(node.val);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(val);
  }
  return res;
};

module.exports = { levelOrder, TreeNode };

/*
https://leetcode.com/problems/binary-tree-level-order-traversal/
*/
