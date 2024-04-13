package _958_check_completeness_of_a_binary_tree;

import java.util.*;

class Solution {
    public boolean isCompleteTree(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            if (node == null)
                break;
            q.add(node.left);
            q.add(node.right);
        }

        return q.stream().allMatch(Objects::isNull);
    }
}
