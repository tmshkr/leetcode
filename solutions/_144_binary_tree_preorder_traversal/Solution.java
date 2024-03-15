package _144_binary_tree_preorder_traversal;

import java.util.*;

class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        if (root == null) {
            return res;
        }
        var stack = new Stack<TreeNode>();
        stack.push(root);

        while (!stack.isEmpty()) {
            var node = stack.pop();
            res.add(node.val);
            if (node.right != null) {
                stack.push(node.right);
            }
            if (node.left != null) {
                stack.push(node.left);
            }
        }
        return res;
    }
}

/*
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */
