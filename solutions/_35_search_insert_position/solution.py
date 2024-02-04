from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if target > nums[mid]:
                lo = mid + 1
            else:
                hi = mid
        return lo


# https://leetcode.com/problems/search-insert-position/
