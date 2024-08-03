from typing import List


class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        def count(word):
            for c in word:
                if word.count(c) > chars.count(c):
                    return 0
            return len(word)

        return sum(count(word) for word in words)


# https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
