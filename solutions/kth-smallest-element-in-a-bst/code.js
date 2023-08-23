function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let curr = root;

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    k--;

    if (k === 0) {
      return curr.val;
    }
    curr = curr.right;
  }
};

module.exports = { kthSmallest, TreeNode };

/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/
