package _242_valid_anagram;

class Solution {

    public boolean isAnagram(String s, String t) {
        int n = s.length();
        int m = t.length();
        if (n != m) {
            return false;
        }

        int[] count = new int[26];

        for (int i = 0; i < n; ++i) {
            ++count[s.charAt(i) - 97];
            --count[t.charAt(i) - 97];
        }

        for (int i = 0; i < 26; ++i) {
            if (count[i] != 0) {
                return false;
            }
        }

        return true;
    }
}
/**
 * https://leetcode.com/problems/valid-anagram/
 */
