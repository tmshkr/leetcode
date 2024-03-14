
package _94_binary_tree_inorder_traversal;

import java.util.List;
import java.util.ArrayList;
import java.util.Stack;

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();

        TreeNode curr = root;
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            res.add(curr.val);
            curr = curr.right;
        }

        return res;
    }
}

/*
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */