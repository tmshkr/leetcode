function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Iterative DFS
var maxDepth = function (root) {
  const stack = [[root, 1]];
  let res = 0;

  while (stack.length) {
    const [node, depth] = stack.pop();

    if (node) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return res;
};

module.exports = { maxDepth, TreeNode };

/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/
