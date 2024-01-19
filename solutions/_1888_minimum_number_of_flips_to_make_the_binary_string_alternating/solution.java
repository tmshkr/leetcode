package _1888_minimum_number_of_flips_to_make_the_binary_string_alternating;

class Solution {
    public int minFlips(String s) {
        int n = s.length();
        int res = 0;
        int count0 = 0;
        int count1 = 0;

        for (int i = 0; i < n; i++) {
            byte b = (byte) (s.charAt(i) - '0');
            if (b == i % 2) {
                count1++;
            } else {
                count0++;
            }
        }

        res = Math.min(count0, count1);

        for (int i = 0; i < n; i++) {
            byte b = (byte) (s.charAt(i) - '0');
            if (b == i % 2) {
                count1--;
            } else {
                count0--;
            }

            if (b == (n + i) % 2) {
                count1++;
            } else {
                count0++;
            }

            res = Math.min(res, Math.min(count0, count1));
        }

        return res;
    }
}

/*
 * https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-
 * string-alternating/
 */