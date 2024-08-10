from typing import List
from collections import Counter


class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        n = len(words)
        ctr = Counter()
        for word in words:
            ctr.update(word)
        for _, value in ctr.items():
            if value % n != 0:
                return False
        return True


# https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
