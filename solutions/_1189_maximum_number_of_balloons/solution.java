package _1189_maximum_number_of_balloons;

import java.util.HashMap;

class Solution {

  public int maxNumberOfBalloons(String text) {
    Counter inputCtr = new Counter(text);
    Counter targetCtr = new Counter("balloon");

    int res = Integer.MAX_VALUE;
    for (char c : "balloon".toCharArray()) {
      int count = inputCtr.get(c) / targetCtr.get(c);
      res = Math.min(res, count);
    }

    return res;
  }

  public class Counter {

    private HashMap<Character, Integer> _ctr = new HashMap<>();

    public Counter(String s) {
      for (char c : s.toCharArray()) {
        _ctr.put(c, _ctr.getOrDefault(c, 0) + 1);
      }
    }

    public int get(char c) {
      return _ctr.getOrDefault(c, 0);
    }
  }
}
/*
https://leetcode.com/problems/maximum-number-of-balloons/
*/
