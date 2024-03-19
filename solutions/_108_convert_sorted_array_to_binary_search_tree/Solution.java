
package _108_convert_sorted_array_to_binary_search_tree;

import java.util.Arrays;

class Solution {
    public static TreeNode sortedArrayToBST(int[] nums) {
        if (nums.length == 0) {
            return null;
        }

        int mid = nums.length / 2;
        TreeNode node = new TreeNode(nums[mid]);

        node.left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, mid));
        node.right = sortedArrayToBST(Arrays.copyOfRange(nums, mid + 1, nums.length));

        return node;
    }
}

/*
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */