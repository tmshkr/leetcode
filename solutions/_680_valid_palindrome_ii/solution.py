class Solution:
    def validPalindrome(
        self, s: str, l: int = None, r: int = None, skipped: bool = False
    ) -> bool:
        if skipped is False:
            l = 0
            r = len(s) - 1
        while l < r:
            if s[l] != s[r]:
                if skipped:
                    return False
                return self.validPalindrome(s, l + 1, r, True) or self.validPalindrome(
                    s, l, r - 1, True
                )
            l += 1
            r -= 1
        return True


# https://leetcode.com/problems/valid-palindrome-ii/
