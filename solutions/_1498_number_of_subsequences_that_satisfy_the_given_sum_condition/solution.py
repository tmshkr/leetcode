from typing import List


class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        nums.sort()
        l = 0
        r = len(nums) - 1
        count = 0
        mod = 10**9 + 7

        while l <= r:
            if nums[l] + nums[r] > target:
                r -= 1
            else:
                count += pow(2, r - l, mod)
                l += 1

        return count % mod


# https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
