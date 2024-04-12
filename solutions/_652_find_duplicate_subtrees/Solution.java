
package _652_find_duplicate_subtrees;

import java.util.*;

class Solution {
    List<TreeNode> res = new ArrayList<>();
    Map<String, Integer> map = new HashMap<>();

    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        dfs(root);
        return res;
    }

    private String dfs(TreeNode node) {
        if (node == null) {
            return "#";
        }
        String left = dfs(node.left);
        String right = dfs(node.right);
        String key = node.val + "," + left + "," + right;
        int seen = map.getOrDefault(key, 0);
        if (seen == 1) {
            res.add(node);
        }
        map.put(key, seen + 1);
        return key;
    }
}

/*
 * https://leetcode.com/problems/find-duplicate-subtrees/
 */