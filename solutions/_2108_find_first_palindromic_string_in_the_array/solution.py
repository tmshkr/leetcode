from typing import List


class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        def is_palindrome(word):
            return word == word[::-1]

        for word in words:
            if is_palindrome(word):
                return word
        return ""


# https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
