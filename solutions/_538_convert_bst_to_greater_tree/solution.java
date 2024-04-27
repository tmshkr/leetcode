
package _538_convert_bst_to_greater_tree;

import test_helpers.binary_tree.TreeNode;

class Solution {
    public TreeNode convertBST(TreeNode root) {
        convertBST(root, 0);
        return root;
    }

    private int convertBST(TreeNode root, int sum) {
        if (root == null) {
            return sum;
        }

        root.val += convertBST(root.right, sum);
        return convertBST(root.left, root.val);
    }
}

/*
 * https://leetcode.com/problems/convert-bst-to-greater-tree/
 */