package _1930_unique_length_3_palindromic_subsequences;

import java.util.*;

class Solution {

  public int countPalindromicSubsequence(String str) {
    int count = 0;
    Set<Character> set = new HashSet<>();
    for (char c : str.toCharArray()) {
      set.add(c);
    }
    for (char c : set) {
      int first = str.indexOf(c);
      int last = str.lastIndexOf(c);
      if (first != -1 && first != last) {
        count += str.substring(first + 1, last).chars().distinct().count();
      }
    }

    return count;
  }
}
/*
https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
*/
