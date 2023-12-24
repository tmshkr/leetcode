package _187_repeated_dna_sequences;

import java.util.*;

class Solution {

  public List<String> findRepeatedDnaSequences(String s) {
    Set<String> seen = new HashSet<>();
    Set<String> repeated = new HashSet<>();
    for (int i = 0; i < s.length() - 9; i++) {
      String sub = s.substring(i, i + 10);
      if (seen.contains(sub)) {
        repeated.add(sub);
      } else {
        seen.add(sub);
      }
    }

    return List.of(repeated.toArray(new String[0]));
  }
}
/*
https://leetcode.com/problems/repeated-dna-sequences/
*/
