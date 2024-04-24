/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const q = [root];
  let node;
  while (q.length > 0) {
    node = q.shift();
    if (node.right) q.push(node.right);
    if (node.left) q.push(node.left);
  }

  return node.val;
};

module.exports = { findBottomLeftValue };

/*
https://leetcode.com/problems/find-bottom-left-tree-value/
*/
