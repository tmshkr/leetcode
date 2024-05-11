
package _1849_splitting_a_string_into_descending_consecutive_values;

class Solution {
    String s;

    public boolean splitString(String s) {
        this.s = s;
        return split(0, -1, 0);
    }

    public boolean split(int i, long prev, int count) {
        if (i >= s.length()) {
            return count >= 2;
        }
        long num = 0;
        for (int j = i; j < s.length(); j++) {
            num = num * 10 + (s.charAt(j) - '0');
            if (prev == -1 || prev - 1 == num) {
                if (split(j + 1, num, count + 1)) {
                    return true;
                }
            }
        }
        return false;
    }
}

/*
 * https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-
 * values/
 */
