from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1

        for i in range(goal, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        return goal == 0


# https://leetcode.com/problems/jump-game/
