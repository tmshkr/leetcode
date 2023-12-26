package _665_non_decreasing_array;

class Solution {

  public boolean checkPossibility(int[] nums) {
    int count = 0;
    int prev = nums[0];
    for (int i = 1; i < nums.length; i++) {
      if (prev > nums[i]) {
        if (++count > 1) {
          return false;
        }
        if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
          continue;
        }
      }
      prev = nums[i];
    }
    return true;
  }
}
/*
https://leetcode.com/problems/non-decreasing-array/
*/
