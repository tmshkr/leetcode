from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.search(nums, target, True)
        end = self.search(nums, target, False)
        return [start, end]

    # leftBias=[True/False], if false, res is rightBiased
    def search(self, nums, target, leftBias):
        L = 0
        R = len(nums) - 1
        i = -1
        while L <= R:
            mid = (L + R) // 2
            if target > nums[mid]:
                L = mid + 1
            elif target < nums[mid]:
                R = mid - 1
            else:
                i = mid
                if leftBias:
                    R = mid - 1
                else:
                    L = mid + 1
        return i


# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
