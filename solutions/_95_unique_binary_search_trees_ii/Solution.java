
package _95_unique_binary_search_trees_ii;

import java.util.*;

class Solution {
    HashMap<String, List<TreeNode>> memo = new HashMap<>();

    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new ArrayList<>();
        }
        return generate(1, n);
    }

    private List<TreeNode> generate(int start, int end) {
        List<TreeNode> result = new ArrayList<>();
        if (start > end) {
            result.add(null);
            return result;
        } else if (memo.containsKey(start + "-" + end)) {
            return memo.get(start + "-" + end);
        }

        for (int val = start; val <= end; val++) {
            for (TreeNode leftTree : generate(start, val - 1)) {
                for (TreeNode rightTree : generate(val + 1, end)) {
                    TreeNode node = new TreeNode(val);
                    node.left = leftTree;
                    node.right = rightTree;
                    result.add(node);
                }
            }
        }
        memo.put(start + "-" + end, result);
        return result;
    }
}

/*
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 */