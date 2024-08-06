package _1913_maximum_product_difference_between_two_pairs;

import java.util.Arrays;

class Solution {
    public int maxProductDifference(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
    }
}

/*
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */