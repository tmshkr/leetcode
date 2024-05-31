from typing import List


class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        if not nums:
            return 0

        points = [0] * (max(nums) + 1)

        for num in nums:
            points[num] += num

        prev = 0
        curr = 0

        for i in range(len(points)):
            temp = curr
            curr = max(curr, prev + points[i])
            prev = temp

        return curr


# https://leetcode.com/problems/delete-and-earn/
