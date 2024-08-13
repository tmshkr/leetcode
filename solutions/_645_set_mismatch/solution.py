from typing import List


class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        s = set()

        for num in nums:
            if num in s:
                duplicate = num
            else:
                s.add(num)

        missing = n * (n + 1) // 2 - sum(nums) + duplicate
        return [duplicate, missing]


# https://leetcode.com/problems/set-mismatch/
