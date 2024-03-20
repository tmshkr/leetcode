
package _617_merge_two_binary_trees;

class Solution {
    public TreeNode mergeTrees(TreeNode a, TreeNode b) {
        if (a == null && b == null)
            return null;
        if (a == null)
            return b;
        if (b == null)
            return a;

        a.val += b.val;
        a.left = mergeTrees(a.left, b.left);
        a.right = mergeTrees(a.right, b.right);

        return a;
    }
}

/*
 * https://leetcode.com/problems/merge-two-binary-trees/
 */
