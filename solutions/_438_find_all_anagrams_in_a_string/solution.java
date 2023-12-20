package _438_find_all_anagrams_in_a_string;

import java.util.*;

class Solution {

  public List<Integer> findAnagrams(String s, String p) {
    int start = 0;
    HashMap<Character, Integer> pMap = new HashMap<>();
    HashMap<Character, Integer> sMap = new HashMap<>();
    List<Integer> result = new ArrayList<>();

    for (char c : p.toCharArray()) {
      pMap.put(c, pMap.getOrDefault(c, 0) + 1);
    }

    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      sMap.put(c, sMap.getOrDefault(c, 0) + 1);

      if (i - start + 1 == p.length()) {
        if (pMap.equals(sMap)) {
          result.add(start);
        }

        char charToRemove = s.charAt(start);
        sMap.put(charToRemove, sMap.get(charToRemove) - 1);
        if (sMap.get(charToRemove) == 0) {
          sMap.remove(charToRemove);
        }
        start++;
      }
    }

    return result;
  }
}
/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/
*/
