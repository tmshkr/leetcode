package _2264_largest_3_same_digit_number_in_string;

class Solution {
    public String largestGoodInteger(String num) {
        String largest = "";
        for (int i = 0; i <= num.length() - 3; i++) {
            char ch = num.charAt(i);
            if (ch == num.charAt(i + 1) && ch == num.charAt(i + 2)) {
                String sub = num.substring(i, i + 3);
                if (sub.compareTo(largest) > 0) {
                    largest = sub;
                }
            }
        }
        return largest;
    }
}

/*
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 */