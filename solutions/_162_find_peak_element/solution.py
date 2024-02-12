from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        L = 0
        R = len(nums) - 1

        while L < R:
            mid = (R + L) // 2
            if nums[mid] > nums[mid + 1]:
                R = mid
            else:
                L = mid + 1

        return L


# https://leetcode.com/problems/find-peak-element/
