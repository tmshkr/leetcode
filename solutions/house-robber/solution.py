from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        prevMax, maxSum = 0, 0

        for money in nums:
            prevMax, maxSum = maxSum, max(money + prevMax, maxSum)

        return maxSum


# https://leetcode.com/problems/house-robber/
