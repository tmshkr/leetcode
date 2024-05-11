from functools import cache


class Solution:
    def splitString(self, s: str) -> bool:
        @cache
        def split(i, prev, count):
            if i >= len(s):
                return count >= 2
            num = 0
            for j in range(i, len(s)):
                num = num * 10 + int(s[j])
                if prev == -1 or num == prev - 1:
                    if split(j + 1, num, count + 1):
                        return True
            return False

        return split(0, -1, 0)


# https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
