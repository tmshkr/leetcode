from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        i = 0
        while i < len(nums):
            corrext_idx = nums[i] - 1
            if nums[i] != nums[corrext_idx]:
                nums[corrext_idx], nums[i] = nums[i], nums[corrext_idx]
            else:
                i += 1

        return [i + 1 for i, n in enumerate(nums) if n != i + 1]


# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
