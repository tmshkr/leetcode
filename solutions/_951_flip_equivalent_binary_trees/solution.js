/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */
var flipEquiv = function (a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  return (
    (flipEquiv(a.left, b.left) && flipEquiv(a.right, b.right)) ||
    (flipEquiv(a.left, b.right) && flipEquiv(a.right, b.left))
  );
};

module.exports = { flipEquiv };

/*
https://leetcode.com/problems/flip-equivalent-binary-trees/
*/
