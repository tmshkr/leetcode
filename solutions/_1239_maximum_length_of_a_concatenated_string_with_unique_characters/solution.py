from typing import List


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        max_len = 0
        dp = [set()]
        for string in arr:
            a = set(string)
            if len(a) < len(string):
                continue
            for b in dp:
                if a & b:
                    continue
                s = a | b
                dp.append(s)
                max_len = max(max_len, len(s))

        return max_len


# https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
