from typing import List


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        cache = {}  # (index, sum) -> # of ways

        def recurse(i, sum):
            if i == len(nums):
                return 1 if sum == target else 0
            if (i, sum) in cache:
                return cache[(i, sum)]

            cache[(i, sum)] = recurse(i + 1, sum + nums[i]) + recurse(
                i + 1, sum - nums[i]
            )
            return cache[(i, sum)]

        return recurse(0, 0)


# https://leetcode.com/problems/target-sum/
