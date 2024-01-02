package _1984_minimum_difference_between_highest_and_lowest_of_k_scores;

import java.util.Arrays;

class Solution {

  public int minimumDifference(int[] nums, int k) {
    Arrays.sort(nums);
    int min = Integer.MAX_VALUE;
    int l = 0;
    int r = k - 1;

    while (r < nums.length) {
      min = Math.min(min, nums[r] - nums[l]);
      l++;
      r++;
    }

    return min;
  }
}
/*
https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
*/
