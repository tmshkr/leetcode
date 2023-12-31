package _2405_optimal_partition_of_string;

class Solution {

  public int partitionString(String s) {
    int res = 1;
    int flag = 0;

    for (int i = 0; i < s.length(); i++) {
      int val = s.charAt(i) - 'a';
      if ((flag & (1 << val)) != 0) {
        flag = 0;
        res++;
      }
      flag = flag | (1 << val);
    }

    return res;
  }
}
/*
https://leetcode.com/problems/optimal-partition-of-string/
*/
