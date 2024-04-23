const { TreeNode } = require("../test_helpers/binary-tree.js");

var allPossibleFBT = function (
  n,
  memo = new Map([
    [0, []],
    [1, [new TreeNode(0)]],
  ])
) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  const res = [];
  for (let i = 1; i < n; i += 2) {
    for (const left of allPossibleFBT(i, memo)) {
      for (const right of allPossibleFBT(n - i - 1, memo)) {
        const node = new TreeNode(0);
        node.left = left;
        node.right = right;
        res.push(node);
      }
    }
  }

  memo.set(n, res);
  return res;
};

module.exports = { allPossibleFBT };

/*
https://leetcode.com/problems/all-possible-full-binary-trees/
*/
