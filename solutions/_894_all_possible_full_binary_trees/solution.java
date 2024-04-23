
package _894_all_possible_full_binary_trees;

import java.util.*;
import test_helpers.binary_tree.TreeNode;

class Solution {
    HashMap<Integer, List<TreeNode>> memo = new HashMap<>();

    Solution() {
        memo.put(0, new ArrayList<>());
        memo.put(1, List.of(new TreeNode(0)));
    }

    public List<TreeNode> allPossibleFBT(int n) {
        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        List<TreeNode> res = new ArrayList<>();
        for (int i = 1; i < n; i += 2) {
            for (TreeNode left : allPossibleFBT(i)) {
                for (TreeNode right : allPossibleFBT(n - i - 1)) {
                    TreeNode node = new TreeNode(0);
                    node.left = left;
                    node.right = right;
                    res.add(node);
                }
            }
        }
        memo.put(n, res);
        return res;
    }
}

/*
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 */