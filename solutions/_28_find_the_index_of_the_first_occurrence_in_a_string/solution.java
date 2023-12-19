package _28_find_the_index_of_the_first_occurrence_in_a_string;

class Solution {

  public int strStr(String haystack, String needle) {
    if (needle.isEmpty()) return 0;
    if (haystack.isEmpty()) return -1;

    for (int i = 0; i < haystack.length(); i++) {
      if (haystack.charAt(i) == needle.charAt(0)) {
        if (i + needle.length() <= haystack.length()) {
          if (haystack.substring(i, i + needle.length()).equals(needle)) {
            return i;
          }
        }
      }
    }

    return -1;
  }
}
/*
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
*/
