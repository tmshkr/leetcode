
package _1456_maximum_number_of_vowels_in_a_substring_of_given_length;

import java.util.HashSet;

class Solution {
    public int maxVowels(String s, int k) {
        var vowels = new HashSet<Character>();
        for (char c : "aeiou".toCharArray())
            vowels.add(c);

        int max = 0;
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            if (vowels.contains(s.charAt(i)))
                count++;
            if (i >= k && vowels.contains(s.charAt(i - k)))
                count--;
            if (count > max)
                max = count;
        }

        return max;
    }
}

/*
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-
 * given-length/
 */