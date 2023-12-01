package _303_range_sum_query_immutable;

class NumArray {

  private int[] sums;

  public NumArray(int[] nums) {
    sums = new int[nums.length];
    int sum = 0;
    for (int i = 0; i < nums.length; i++) {
      sum += nums[i];
      sums[i] = sum;
    }
  }

  public int sumRange(int left, int right) {
    return sums[right] - (left > 0 ? sums[left - 1] : 0);
  }
}
/*
https://leetcode.com/problems/range-sum-query-immutable/
*/
