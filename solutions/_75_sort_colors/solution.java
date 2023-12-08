package _75_sort_colors;

class Solution {

  public void sortColors(int[] nums) {
    int lo = 0;
    int mid = 0;
    int hi = nums.length - 1;
    while (mid <= hi) {
      switch (nums[mid]) {
        case 0:
          swap(nums, mid, lo);
          lo++;
          mid++;
          break;
        case 1:
          mid++;
          break;
        case 2:
          swap(nums, mid, hi);
          hi--;
          break;
        default:
          throw new IllegalArgumentException("Unexpected value: " + nums[mid]);
      }
    }
  }

  public void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
/*
https://leetcode.com/problems/sort-colors/
*/
