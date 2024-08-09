package _1758_minimum_changes_to_make_alternating_binary_string;

class Solution {
    public int minOperations(String s) {
        int n = s.length();
        int count1 = 0;
        int count2 = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) - '0' == i % 2)
                count1++;
            else
                count2++;
        }
        return Math.min(count1, count2);
    }
}

/**
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 */