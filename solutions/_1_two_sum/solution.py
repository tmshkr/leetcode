from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ht = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in ht:
                return [ht[complement], i]

            ht[num] = i
        return None


# https://leetcode.com/problems/two-sum/
