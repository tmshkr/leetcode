class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(words) != len(pattern):
            return False
        pattern_to_word = {}
        word_to_pattern = {}
        for i, word in enumerate(words):
            if pattern[i] in pattern_to_word:
                if pattern_to_word[pattern[i]] != word:
                    return False
            else:
                pattern_to_word[pattern[i]] = word
            if word in word_to_pattern:
                if word_to_pattern[word] != pattern[i]:
                    return False
            else:
                word_to_pattern[word] = pattern[i]
        return True


# https://leetcode.com/problems/word-pattern/
