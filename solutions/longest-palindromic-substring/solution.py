class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""
        current = ""

        def expand(l, r):
            palindrome = ""
            while l >= 0 and r < len(s) and s[l] == s[r]:
                palindrome = s[l:r + 1]
                l -= 1
                r += 1
            return palindrome

        for i in range(len(s)):
            current = expand(i, i)
            if len(current) > len(longest):
                longest = current

            current = expand(i, i + 1)
            if len(current) > len(longest):
                longest = current

        return longest


# https://leetcode.com/problems/longest-palindromic-substring/
