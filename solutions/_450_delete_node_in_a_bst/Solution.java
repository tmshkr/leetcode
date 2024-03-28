package _450_delete_node_in_a_bst;

class Solution {

  public TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;

    if (key < root.val) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
      root.right = deleteNode(root.right, key);
    } else {
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;

      // find the minimum value in the right subtree
      TreeNode rightMin = root.right;
      while (rightMin.left != null) {
        rightMin = rightMin.left;
      }

      root.val = rightMin.val;
      root.right = deleteNode(root.right, root.val);
    }

    return root;
  }
}
/*
https://leetcode.com/problems/delete-node-in-a-bst/
*/
