package _101_symmetric_tree;

class Solution {

  public boolean isSymmetric(TreeNode root) {
    return isMirror(root, root);
  }

  private boolean isMirror(TreeNode left, TreeNode right) {
    if (left == null && right == null) {
      return true;
    }
    if (left == null || right == null) {
      return false;
    }
    return (
      (left.val == right.val) &&
      isMirror(left.right, right.left) &&
      isMirror(left.left, right.right)
    );
  }
}
/*
https://leetcode.com/problems/symmetric-tree/
*/
