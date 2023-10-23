from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = nums[0]
        total = 0

        for n in nums:
            total += n
            res = max(res, total)
            total = max(0, total)

        return res


# https://leetcode.com/problems/maximum-subarray/
