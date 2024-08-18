from typing import List


class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort()
        prev = -float("inf")
        for i, num in enumerate(nums):
            remaining = len(nums) - i
            if num >= remaining > prev:
                return remaining
            prev = num
        return -1


# https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
