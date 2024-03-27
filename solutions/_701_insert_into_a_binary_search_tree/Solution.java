package _701_insert_into_a_binary_search_tree;

class Solution {

  public TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null) {
      return new TreeNode(val);
    }
    if (val < root.val) {
      root.left = insertIntoBST(root.left, val);
    } else {
      root.right = insertIntoBST(root.right, val);
    }
    return root;
  }
}
/*
https://leetcode.com/problems/insert-into-a-binary-search-tree/
*/
