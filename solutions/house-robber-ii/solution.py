from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        return max(self.findMax(nums[1:]), self.findMax(nums[:-1]))

    def findMax(self, nums):
        prevMax, maxSum = 0, 0

        for money in nums:
            prevMax, maxSum = maxSum, max(prevMax + money, maxSum)

        return maxSum


# https://leetcode.com/problems/house-robber-ii/
