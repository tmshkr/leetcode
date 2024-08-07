package _1422_maximum_score_after_splitting_a_string;

class Solution {
    public int maxScore(String s) {
        int n = s.length();
        int zeros = 0;
        int ones = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '1') {
                ones++;
            }
        }
        int maxScore = 0;
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == '0') {
                zeros++;
            } else {
                ones--;
            }
            maxScore = Math.max(maxScore, ones + zeros);
        }

        return maxScore;
    }
}

/*
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 */