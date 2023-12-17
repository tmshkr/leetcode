package _1963_minimum_number_of_swaps_to_make_the_string_balanced;

class Solution {

  public int minSwaps(String s) {
    int open = 0;
    int close = 0;
    int ans = 0;

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '[') {
        open++;
      } else {
        close++;
      }

      if (close > open) {
        ans++;
        close--;
        open++;
      }
    }
    return ans;
  }
}
/*
https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
*/
