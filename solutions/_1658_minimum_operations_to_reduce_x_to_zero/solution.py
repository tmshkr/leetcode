from typing import List


class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        if target < 0:
            return -1
        if target == 0:
            return len(nums)

        L = 0
        R = 0
        curr_sum = 0
        max_len = -1
        for R in range(len(nums)):
            curr_sum += nums[R]
            while curr_sum > target:
                curr_sum -= nums[L]
                L += 1
            if curr_sum == target:
                max_len = max(max_len, R - L + 1)

        return -1 if max_len == -1 else len(nums) - max_len


# https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
