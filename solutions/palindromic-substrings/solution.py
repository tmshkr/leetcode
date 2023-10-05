class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0

        for i in range(len(s)):
            count += self.countPalindromes(s, i, i)
            count += self.countPalindromes(s, i, i + 1)
        return count

    def countPalindromes(self, s, l, r):
        res = 0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            res += 1
            l -= 1
            r += 1
        return res


# https://leetcode.com/problems/palindromic-substrings/
