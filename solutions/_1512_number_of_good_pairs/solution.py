from typing import List


class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = [0] * 101
        result = 0
        for num in nums:
            result += count[num]
            count[num] += 1
        return result


# https://leetcode.com/problems/number-of-good-pairs/
