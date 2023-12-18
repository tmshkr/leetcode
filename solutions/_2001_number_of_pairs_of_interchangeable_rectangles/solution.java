package _2001_number_of_pairs_of_interchangeable_rectangles;

import java.util.*;

class Solution {

  public long interchangeableRectangles(int[][] rectangles) {
    HashMap<Double, Long> map = new HashMap<>();
    long result = 0;
    for (int[] rectangle : rectangles) {
      double ratio = (double) rectangle[0] / rectangle[1];
      map.put(ratio, map.getOrDefault(ratio, 0L) + 1);
    }

    for (long value : map.values()) {
      result += (value * (value - 1)) / 2;
    }

    return result;
  }
}
/*
https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
*/
