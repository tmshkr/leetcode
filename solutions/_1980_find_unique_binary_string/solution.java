
package _1980_find_unique_binary_string;

import java.util.Set;

class Solution {
    public String findDifferentBinaryString(String[] nums) {
        int n = nums.length;
        Set<String> set = Set.of(nums);
        for (int i = 0; i < 1 << n; i++) {
            String s = Integer.toBinaryString(i);
            while (s.length() < n) {
                s = "0" + s;
            }
            if (!set.contains(s)) {
                return s;
            }
        }
        return "";
    }
}

/*
 * https://leetcode.com/problems/find-unique-binary-string/
 */