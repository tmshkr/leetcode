package _554_brick_wall;

import java.util.*;

class Solution {

  public int leastBricks(List<List<Integer>> wall) {
    Map<Integer, Integer> idx2gaps = new HashMap<>();
    int max = 0;

    for (List<Integer> row : wall) {
      int idx = 0;
      for (int i = 0; i < row.size() - 1; i++) {
        idx += row.get(i);
        idx2gaps.put(idx, idx2gaps.getOrDefault(idx, 0) + 1);
        max = Math.max(max, idx2gaps.get(idx));
      }
    }

    return wall.size() - max;
  }
}
/*
https://leetcode.com/problems/brick-wall/
*/
