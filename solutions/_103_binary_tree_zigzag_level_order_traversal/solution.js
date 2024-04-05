function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const q = [root];
  let reverse = false;

  while (q.length > 0) {
    const level = [];
    const n = q.length;

    for (let i = 0; i < n; i++) {
      const node = q.shift();
      if (reverse) {
        level.unshift(node.val);
      } else {
        level.push(node.val);
      }

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }

    result.push(level);
    reverse = !reverse;
  }

  return result;
};

module.exports = { zigzagLevelOrder, TreeNode };

/*
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
*/
