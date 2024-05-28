package _1239_maximum_length_of_a_concatenated_string_with_unique_characters;

import java.util.*;

class Solution {
    public int maxLength(List<String> arr) {
        List<Integer> dp = new ArrayList<>();
        dp.add(0);
        int max = 0;
        for (String str : arr) {
            // check if the string has duplicate characters
            int a = 0;
            boolean hasDuplicate = false;
            for (char ch : str.toCharArray()) {
                int b = (1 << ch);
                if ((a & b) != 0) {
                    hasDuplicate = true;
                    break;
                }
                a |= b;
            }

            if (!hasDuplicate) {
                for (int i = dp.size() - 1; i >= 0; i--) {
                    // check if the string has overlap with the previous string
                    boolean hasOverlap = (dp.get(i) & a) != 0;
                    if (!hasOverlap) {
                        // merge the string with the previous string
                        int s = dp.get(i) | a;
                        dp.add(s);
                        max = Math.max(max, Integer.bitCount(s));
                    }
                }
            }
        }
        return max;
    }
}

/*
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-
 * unique-characters/
 */