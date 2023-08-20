function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  const q = [root];

  while (q.length) {
    let rightSide = null;
    const qLen = q.length;

    for (let i = 0; i < qLen; i++) {
      const node = q.shift();
      if (node) {
        rightSide = node;
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (rightSide) {
      res.push(rightSide.val);
    }
  }

  return res;
};

module.exports = { rightSideView, TreeNode };

/*
https://leetcode.com/problems/binary-tree-right-side-view/
*/
