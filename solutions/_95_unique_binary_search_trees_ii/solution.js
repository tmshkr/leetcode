function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  const memo = new Map();
  return generate(1, n);

  function generate(start, end) {
    if (start > end) return [null];
    if (memo.has(`${start}-${end}`)) {
      return memo.get(`${start}-${end}`);
    }
    const res = [];
    for (let val = start; val <= end; val++) {
      for (const leftTree of generate(start, val - 1)) {
        for (const rightTree of generate(val + 1, end)) {
          const node = new TreeNode(val);
          node.left = leftTree;
          node.right = rightTree;
          res.push(node);
        }
      }
    }
    memo.set(`${start}-${end}`, res);
    return res;
  }
};

module.exports = { generateTrees, TreeNode };

/*
https://leetcode.com/problems/unique-binary-search-trees-ii/
*/
