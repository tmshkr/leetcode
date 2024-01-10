package _1498_number_of_subsequences_that_satisfy_the_given_sum_condition;

import java.util.Arrays;

class Solution {

  public int numSubseq(int[] nums, int target) {
    int MOD = 1_000_000_007;
    int n = nums.length;
    int[] pows = new int[n];
    pows[0] = 1;
    for (int i = 1; i < n; i++) {
      pows[i] = (pows[i - 1] * 2) % MOD;
    }
    int ans = 0;
    int l = 0;
    int r = n - 1;
    Arrays.sort(nums);
    while (l <= r) {
      if (nums[l] + nums[r] > target) {
        r--;
      } else {
        ans = (ans + pows[r - l]) % MOD;
        l++;
      }
    }
    return ans;
  }
}
/*
https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
*/
