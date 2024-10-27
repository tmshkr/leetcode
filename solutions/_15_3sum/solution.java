package _15_3sum;

import java.util.*;

class Solution {

  public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    Arrays.sort(nums);
    int n = nums.length;

    for (int i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      int L = i + 1;
      int R = n - 1;

      while (L < R) {
        int sum = nums[i] + nums[L] + nums[R];
        if (sum < 0) {
          L++;
        } else if (sum > 0) {
          R--;
        } else {
          res.add(Arrays.asList(nums[i], nums[L], nums[R]));
          while (L < R && nums[L] == nums[L + 1]) L++;
          while (L < R && nums[R] == nums[R - 1]) R--;
          L++;
          R--;
        }
      }
    }

    return res;
  }
}
/**
 * https://leetcode.com/problems/3sum/
 */
