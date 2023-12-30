package _2348_number_of_zero_filled_subarrays;

class Solution {

  public long zeroFilledSubarray(int[] nums) {
    long total = 0;
    long count = 0;
    for (int i : nums) {
      if (i != 0) {
        count = 0;
      } else {
        count++;
        total += count;
      }
    }
    return total;
  }
}
/*
https://leetcode.com/problems/number-of-zero-filled-subarrays/
*/
