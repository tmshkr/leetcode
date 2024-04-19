
package _129_sum_root_to_leaf_numbers;

class Solution {
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }

    private int dfs(TreeNode node, int sum) {
        if (node == null) {
            return 0;
        }
        sum = sum * 10 + node.val;
        if (node.right == null && node.left == null) {
            return sum;
        }
        return dfs(node.left, sum) + dfs(node.right, sum);
    }
}

/*
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */
