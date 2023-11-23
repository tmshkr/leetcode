package _118_pascals_triangle;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> triangle = new ArrayList<>();
    if (numRows < 1) {
      return triangle;
    }

    triangle.add(Arrays.asList(1));
    for (int i = 1; i < numRows; i++) {
      List<Integer> row = new ArrayList<>();
      row.add(1);
      for (int j = 1; j < i; j++) {
        row.add(triangle.get(i - 1).get(j - 1) + triangle.get(i - 1).get(j));
      }
      row.add(1);
      triangle.add(row);
    }
    return triangle;
  }
}
/*
https://leetcode.com/problems/pascals-triangle/
*/
