package _557_reverse_words_in_a_string_iii;

class Solution {
    public String reverseWords(String s) {
        String[] words = s.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            result.append(new StringBuilder(word).reverse().toString() + " ");
        }
        return result.toString().trim();
    }
}

/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */