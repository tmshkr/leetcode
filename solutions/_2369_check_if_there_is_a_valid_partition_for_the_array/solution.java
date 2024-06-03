package _2369_check_if_there_is_a_valid_partition_for_the_array;

class Solution {
    public boolean validPartition(int[] nums) {
        int n = nums.length;
        if (n == 1)
            return false;

        boolean[] dp = new boolean[3];
        dp[0] = true;
        dp[1] = false;
        dp[2] = n > 1 ? nums[0] == nums[1] : false;

        for (int i = 2; i < n; i++) {
            boolean curr = (nums[i] == nums[i - 1] && dp[1]) ||
                    (nums[i] == nums[i - 1] && nums[i] == nums[i - 2] && dp[0]) ||
                    (nums[i] - nums[i - 1] == 1 && nums[i - 1] - nums[i - 2] == 1 && dp[0]);

            dp[0] = dp[1];
            dp[1] = dp[2];
            dp[2] = curr;
        }

        return dp[2];
    }
}

/*
 * https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-
 * array/
 */