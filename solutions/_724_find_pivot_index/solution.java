package _724_find_pivot_index;

class Solution {

  public int pivotIndex(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }

    int leftSum = 0;
    for (int i = 0; i < nums.length; i++) {
      int rightSum = sum - leftSum - nums[i];
      if (leftSum == rightSum) {
        return i;
      }
      leftSum += nums[i];
    }

    return -1;
  }
}
/*
https://leetcode.com/problems/find-pivot-index/
*/
