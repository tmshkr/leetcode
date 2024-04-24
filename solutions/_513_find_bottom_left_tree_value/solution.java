
package _513_find_bottom_left_tree_value;

import java.util.*;
import test_helpers.binary_tree.TreeNode;

class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<TreeNode>();
        q.add(root);
        TreeNode node = new TreeNode();
        while (!q.isEmpty()) {
            node = q.poll();
            if (node.right != null) {
                q.add(node.right);
            }
            if (node.left != null) {
                q.add(node.left);
            }
        }
        return node.val;
    }
}

/*
 * https://leetcode.com/problems/find-bottom-left-tree-value/
 */