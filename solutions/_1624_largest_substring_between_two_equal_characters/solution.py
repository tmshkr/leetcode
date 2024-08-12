class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        max_len = -1
        char_to_index = {}
        for i, char in enumerate(s):
            if char in char_to_index:
                max_len = max(max_len, i - char_to_index[char] - 1)
            else:
                char_to_index[char] = i
        return max_len


# https://leetcode.com/problems/largest-substring-between-two-equal-characters/
