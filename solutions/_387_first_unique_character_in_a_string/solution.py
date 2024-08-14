from collections import Counter


class Solution:
    def firstUniqChar(self, s: str) -> int:
        ctr = Counter(s)
        for i, char in enumerate(s):
            if ctr.get(char) == 1:
                return i
        return -1


# https://leetcode.com/problems/first-unique-character-in-a-string/
