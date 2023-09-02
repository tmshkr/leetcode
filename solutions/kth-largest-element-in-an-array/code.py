from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort()
        return nums[len(nums) - k]


# https://leetcode.com/problems/kth-largest-element-in-an-array/
