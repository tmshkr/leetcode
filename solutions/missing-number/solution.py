from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        x = n
        for i in range(n):
            x ^= i ^ nums[i]
        return x


# https://leetcode.com/problems/missing-number/
