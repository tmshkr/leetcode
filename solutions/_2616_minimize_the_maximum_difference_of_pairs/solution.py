from typing import List


class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums.sort()
        n = len(nums)
        L = 0
        R = nums[-1] - nums[0]
        while L < R:
            mid = (L + R) // 2
            count = 0
            i = 1
            while i < n:
                if nums[i] - nums[i - 1] <= mid:
                    count += 1
                    i += 1
                i += 1
            if count >= p:
                R = mid
            else:
                L = mid + 1
        return L


# https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
