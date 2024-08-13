package _645_set_mismatch;

import java.util.*;

class Solution {
    public int[] findErrorNums(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int total = 0;
        int duplicate = 0;
        for (int num : nums) {
            if (set.contains(num)) {
                duplicate = num;
            } else {
                set.add(num);
            }
            total += num;
        }

        int n = nums.length;
        int[] result = new int[2];
        int expectedSum = n * (n + 1) / 2;
        result[0] = duplicate;
        result[1] = expectedSum - (total - duplicate);
        return result;
    }
}

/**
 * https://leetcode.com/problems/set-mismatch/
 */