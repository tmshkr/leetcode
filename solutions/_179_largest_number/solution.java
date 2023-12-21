package _179_largest_number;

import java.util.Arrays;
import java.util.Comparator;

class Solution {

  public String largestNumber(int[] nums) {
    String[] arr = new String[nums.length];

    for (int i = 0; i < nums.length; i++) {
      arr[i] = String.valueOf(nums[i]);
    }

    Arrays.sort(
      arr,
      new Comparator<String>() {
        public int compare(String a, String b) {
          String n1 = a + b;
          String n2 = b + a;
          return n2.compareTo(n1);
        }
      }
    );

    if (arr[0].equals("0")) return "0";

    StringBuilder largest = new StringBuilder();
    for (String str : arr) {
      largest.append(str);
    }

    return largest.toString();
  }
}
/*
https://leetcode.com/problems/largest-number/
*/
