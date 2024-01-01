package _680_valid_palindrome_ii;

class Solution {

  public boolean validPalindrome(String s) {
    return validPalindrome(s, 0, s.length() - 1, false);
  }

  public boolean validPalindrome(String s, int l, int r, boolean skipped) {
    while (l < r) {
      if (s.charAt(l) == s.charAt(r)) {
        l += 1;
        r -= 1;
      } else {
        if (skipped) return false;
        return (
          validPalindrome(s, l + 1, r, true) ||
          validPalindrome(s, l, r - 1, true)
        );
      }
    }
    return true;
  }
}
/*
https://leetcode.com/problems/valid-palindrome-ii/
*/
