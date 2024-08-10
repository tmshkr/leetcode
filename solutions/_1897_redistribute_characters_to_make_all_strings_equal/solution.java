
package _1897_redistribute_characters_to_make_all_strings_equal;

import java.util.*;

class Solution {
    public boolean makeEqual(String[] words) {
        Map<Character, Integer> ctr = new HashMap<>();
        for (String word : words) {
            for (char c : word.toCharArray()) {
                ctr.put(c, ctr.getOrDefault(c, 0) + 1);
            }
        }
        for (int count : ctr.values()) {
            if (count % words.length != 0) {
                return false;
            }
        }
        return true;
    }
}

/**
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 */