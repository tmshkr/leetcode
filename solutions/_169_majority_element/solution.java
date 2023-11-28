package _169_majority_element;

class Solution {

  public int majorityElement(int[] nums) {
    int count = 0;
    int maj = 0;

    for (int n : nums) {
      if (count == 0) {
        maj = n;
      }
      if (maj == n) {
        count++;
      } else {
        count--;
      }
    }

    return maj;
  }
}
/*
https://leetcode.com/problems/majority-element/
*/
