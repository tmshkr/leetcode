package _1968_array_with_elements_not_equal_to_average_of_neighbors;

import java.util.Arrays;

class Solution {

  public int[] rearrangeArray(int[] nums) {
    int[] result = new int[nums.length];
    Arrays.sort(nums);
    int l = 0;
    int r = nums.length - 1;

    for (int i = 0; i < nums.length; i++) {
      if (i % 2 == 0) {
        result[i] = nums[l++];
      } else {
        result[i] = nums[r--];
      }
    }

    return result;
  }
}
/*
https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
*/
