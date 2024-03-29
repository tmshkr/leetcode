package _783_minimum_distance_between_bst_nodes;

class Solution {

  private int minDiff = Integer.MAX_VALUE;
  private int prev = -1;

  public int minDiffInBST(TreeNode root) {
    inOrder(root);
    return minDiff;
  }

  private void inOrder(TreeNode node) {
    if (node == null) return;

    inOrder(node.left);

    if (prev != -1) {
      minDiff = Math.min(minDiff, node.val - prev);
    }

    prev = node.val;
    inOrder(node.right);
  }
}
/*
https://leetcode.com/problems/minimum-distance-between-bst-nodes/
*/
