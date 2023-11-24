package _27_remove_element;

class Solution {

  public int removeElement(int[] nums, int val) {
    int k = 0;
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] != val) {
        nums[k++] = nums[i];
      }
    }

    return k;
  }
}
/*
https://leetcode.com/problems/remove-element/
*/
