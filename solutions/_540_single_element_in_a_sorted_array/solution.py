from typing import List


class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        L = 0
        R = len(nums) - 1
        while L < R:
            mid = L + (R - L) // 2
            halves_are_even = (R - mid) % 2 == 0

            if nums[mid + 1] == nums[mid]:
                if halves_are_even:
                    L = mid + 2
                else:
                    R = mid - 1
            elif nums[mid - 1] == nums[mid]:
                if halves_are_even:
                    R = mid - 2
                else:
                    L = mid + 1
            else:
                return nums[mid]

        return nums[L]


# https://leetcode.com/problems/single-element-in-a-sorted-array/
