package _1624_largest_substring_between_two_equal_characters;

import java.util.*;

class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int max = -1;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) {
                max = Math.max(max, i - map.get(c) - 1);
            } else {
                map.put(c, i);
            }
        }
        return max;
    }
}

/**
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 */