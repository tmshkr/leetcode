package _344_reverse_string;

class Solution {

  public void reverseString(char[] s) {
    int l = 0;
    int r = s.length - 1;

    while (l < r) {
      char temp = s[r];
      s[r] = s[l];
      s[l] = temp;
      l++;
      r--;
    }
  }
}
/*
https://leetcode.com/problems/reverse-string/
*/
