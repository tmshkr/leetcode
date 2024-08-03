package _1160_find_words_that_can_be_formed_by_characters;

class Solution {
    public int countCharacters(String[] words, String chars) {
        int[] charCount = new int[26];
        for (char c : chars.toCharArray()) {
            charCount[c - 'a']++;
        }
        int result = 0;
        for (String word : words) {
            int[] wordCount = new int[26];
            for (char c : word.toCharArray()) {
                wordCount[c - 'a']++;
            }
            boolean good = true;
            for (int i = 0; i < 26; i++) {
                if (wordCount[i] > charCount[i]) {
                    good = false;
                    break;
                }
            }
            if (good) {
                result += word.length();
            }
        }
        return result;
    }
}

/*
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */