
package _662_maximum_width_of_binary_tree;

import java.util.*;

class Solution {
    ArrayList<Integer> start = new ArrayList<Integer>();
    int max = 0;

    public int widthOfBinaryTree(TreeNode root) {
        start.add(0);
        dfs(root, 0, 0);
        return max;
    }

    private void dfs(TreeNode node, int level, int pos) {
        if (node == null) {
            return;
        }
        if (start.size() == level) {
            start.add(pos);
        }
        int diff = pos - start.get(level);
        max = Math.max(max, diff + 1);
        dfs(node.left, level + 1, 2 * diff);
        dfs(node.right, level + 1, 2 * diff + 1);
    }
}

/*
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 */