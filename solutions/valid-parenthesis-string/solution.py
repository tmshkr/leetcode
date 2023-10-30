class Solution:
    def checkValidString(self, s: str) -> bool:
        lo = 0
        hi = 0

        for char in s:
            if char == "(":
                lo += 1
                hi += 1
            elif char == ")":
                lo -= 1
                hi -= 1
            else:
                lo -= 1
                hi += 1

            lo = max(lo, 0)
            if lo > hi:
                return False

        return lo == 0


# https://leetcode.com/problems/valid-parenthesis-string/
