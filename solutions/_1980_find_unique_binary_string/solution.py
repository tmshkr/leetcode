from typing import List


class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums)
        for i in range(1 << n):
            s = bin(i)[2:].zfill(n)
            if s not in nums:
                return s
        return ""


# https://leetcode.com/problems/find-unique-binary-string/
