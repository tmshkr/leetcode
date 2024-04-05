package _103_binary_tree_zigzag_level_order_traversal;

import java.util.*;

class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null)
            return res;

        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        boolean reverse = false;

        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                if (reverse) {
                    level.add(0, node.val);
                } else {
                    level.add(node.val);
                }

                if (node.left != null)
                    q.add(node.left);
                if (node.right != null)
                    q.add(node.right);
            }

            res.add(level);
            reverse = !reverse;
        }

        return res;

    }
}

/*
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */