class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = [0, 0]  # [start, length]

        def expand(l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                length = r - l + 1
                if (length > longest[1]):
                    longest[0] = l
                    longest[1] = length
                l -= 1
                r += 1

        for i in range(len(s)):
            expand(i, i)
            expand(i, i + 1)

        return s[longest[0]:longest[0] + longest[1]]


# https://leetcode.com/problems/longest-palindromic-substring/
