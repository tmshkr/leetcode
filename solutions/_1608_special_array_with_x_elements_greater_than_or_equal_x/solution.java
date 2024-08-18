package _1608_special_array_with_x_elements_greater_than_or_equal_x;

import java.util.*;

class Solution {
    public int specialArray(int[] nums) {
        Arrays.sort(nums);
        int prev = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int remaining = nums.length - i;
            if (num >= remaining && remaining > prev) {
                return remaining;
            }
            prev = num;
        }
        return -1;
    }
}

/**
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */