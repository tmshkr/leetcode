package _217_contains_duplicate;

import java.util.*;

class Solution {

  public boolean containsDuplicate(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    for (int num : nums) {
      if (seen.contains(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}
/**
 * https://leetcode.com/problems/contains-duplicate/
 */
