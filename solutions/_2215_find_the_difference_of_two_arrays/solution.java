package _2215_find_the_difference_of_two_arrays;

import java.util.*;

class Solution {

  public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>();
    Set<Integer> set2 = new HashSet<>();

    for (int n : nums1) set1.add(n);
    for (int n : nums2) set2.add(n);

    List<List<Integer>> res = new ArrayList<>();
    res.add(new ArrayList<>());
    res.add(new ArrayList<>());

    set1
      .iterator()
      .forEachRemaining(n -> {
        if (!set2.contains(n)) {
          res.get(0).add(n);
        }
      });

    set2
      .iterator()
      .forEachRemaining(n -> {
        if (!set1.contains(n)) {
          res.get(1).add(n);
        }
      });

    return res;
  }
}
/*
https://leetcode.com/problems/find-the-difference-of-two-arrays/
*/
