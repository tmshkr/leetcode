package _496_next_greater_element_i;

import java.util.*;

class Solution {

  public int[] nextGreaterElement(int[] a, int[] b) {
    HashMap<Integer, Integer> val2idx = new HashMap<>();
    for (int i = 0; i < a.length; i++) {
      val2idx.put(a[i], i);
    }

    int[] res = new int[a.length];
    Arrays.fill(res, -1);
    Stack<Integer> stack = new Stack<>();

    for (int i = 0; i < b.length; i++) {
      int cur = b[i];

      while (stack.size() > 0 && cur > stack.peek()) {
        int val = stack.pop();
        int idx = val2idx.get(val);
        res[idx] = cur;
      }

      if (val2idx.containsKey(cur)) {
        stack.push(cur);
      }
    }

    return res;
  }
}
/*
https://leetcode.com/problems/next-greater-element-i/
*/
