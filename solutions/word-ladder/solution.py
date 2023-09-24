from typing import List
from collections import deque, defaultdict


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList:
            return 0

        word_set = set(wordList)
        queue = deque([(beginWord, 1)])

        while queue:
            current_word, level = queue.popleft()

            if current_word == endWord:
                return level

            for i in range(len(current_word)):
                for char in 'abcdefghijklmnopqrstuvwxyz':
                    next_word = current_word[:i] + char + current_word[i+1:]

                    if next_word in word_set:
                        word_set.remove(next_word)
                        queue.append((next_word, level + 1))

        return 0


# https://leetcode.com/problems/word-ladder/
