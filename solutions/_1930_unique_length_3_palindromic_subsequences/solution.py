class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        count = 0

        for char in set(s):
            first = s.find(char)
            last = s.rfind(char)
            count += len(set(s[first + 1 : last]))
        return count


# https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
