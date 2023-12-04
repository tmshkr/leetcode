package _290_word_pattern;

import java.util.*;

class Solution {

  public boolean wordPattern(String pattern, String s) {
    String[] words = s.split(" ");
    if (words.length != pattern.length()) return false;

    Map<Character, String> map = new HashMap<>();
    Set<String> set = new HashSet<>();

    for (int i = 0; i < pattern.length(); i++) {
      char c = pattern.charAt(i);
      String word = words[i];

      if (map.containsKey(c)) {
        if (!map.get(c).equals(word)) return false;
      } else {
        if (set.contains(word)) return false;
        map.put(c, word);
        set.add(word);
      }
    }

    return true;
  }
}
/*
https://leetcode.com/problems/word-pattern/
*/
