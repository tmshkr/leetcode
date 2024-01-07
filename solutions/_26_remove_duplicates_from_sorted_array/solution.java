package _26_remove_duplicates_from_sorted_array;

class Solution {

  public int removeDuplicates(int[] nums) {
    int l = 1;
    for (int r = 1; r < nums.length; r++) {
      if (nums[r] != nums[r - 1]) {
        nums[l] = nums[r];
        l++;
      }
    }
    return l;
  }
}
/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/
