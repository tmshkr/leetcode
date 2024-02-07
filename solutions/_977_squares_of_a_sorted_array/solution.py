from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [0] * n
        L = 0
        R = n - 1

        while L <= R:
            left = abs(nums[L])
            right = abs(nums[R])
            if left > right:
                res[R - L] = left**2
                L += 1
            else:
                res[R - L] = right**2
                R -= 1

        return res


# https://leetcode.com/problems/squares-of-a-sorted-array/
