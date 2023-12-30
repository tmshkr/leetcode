from typing import List


class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        total = 0
        count = 0
        for num in nums:
            if num != 0:
                count = 0
            else:
                count += 1
                total += count

        return total


# https://leetcode.com/problems/number-of-zero-filled-subarrays/
