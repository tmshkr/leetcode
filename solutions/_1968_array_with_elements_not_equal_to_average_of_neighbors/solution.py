from typing import List


class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        res = []
        l = 0
        r = len(nums) - 1

        for i in range(len(nums)):
            if i % 2 == 0:
                res.append(nums[l])
                l += 1
            else:
                res.append(nums[r])
                r -= 1

        return res


# https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
