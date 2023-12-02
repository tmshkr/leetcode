package _448_find_all_numbers_disappeared_in_an_array;

import java.util.*;

class Solution {

  public List<Integer> findDisappearedNumbers(int[] nums) {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < nums.length; i++) {
      int correctIdx = nums[i] - 1;
      if (nums[i] != nums[correctIdx]) {
        int temp = nums[i];
        nums[i] = nums[correctIdx];
        nums[correctIdx] = temp;
        i--;
      }
    }
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] - 1 != i) list.add(i + 1);
    }
    return list;
  }
}
/*
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/
