class Solution:
    def minSwaps(self, s: str) -> int:
        swaps = 0
        open = 0
        close = 0

        for bracket in s:
            if bracket == "[":
                open += 1
            else:
                close += 1

            if close > open:
                swaps += 1
                close -= 1
                open += 1

        return swaps


# https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
