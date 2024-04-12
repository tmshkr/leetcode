function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];

  const dfs = (node) => {
    if (!node) {
      return null;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);
    const key = `${node.val},${left},${right}`;

    const seen = map.get(key) || 0;
    if (seen === 1) {
      res.push(node);
    }
    map.set(key, seen + 1);

    return key;
  };

  dfs(root);

  return res;
};

module.exports = { findDuplicateSubtrees, TreeNode };

/*
https://leetcode.com/problems/find-duplicate-subtrees/
*/
