
package _1658_minimum_operations_to_reduce_x_to_zero;

import java.util.stream.IntStream;

class Solution {
    public int minOperations(int[] nums, int x) {
        int target = IntStream.of(nums).sum() - x;
        int currSum = 0;
        int maxLen = -1;
        int L = 0;

        for (int R = 0; R < nums.length; R++) {
            currSum += nums[R];

            while (L <= R && currSum > target) {
                currSum -= nums[L];
                L++;
            }

            if (currSum == target)
                maxLen = Math.max(maxLen, R - L + 1);
        }

        return maxLen == -1 ? -1 : nums.length - maxLen;
    }
}

/*
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 */