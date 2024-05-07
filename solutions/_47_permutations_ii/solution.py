from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def backtrack(perm):
            if len(perm) == len(nums):
                res.append(perm[:])
                return
            for i in range(len(nums)):
                if visited[i] or (
                    i > 0 and nums[i] == nums[i - 1] and not visited[i - 1]
                ):
                    continue
                visited[i] = True
                perm.append(nums[i])
                backtrack(perm)
                visited[i] = False
                perm.pop()

        res = []
        visited = [False] * len(nums)
        nums.sort()
        backtrack([])
        return res


# https://leetcode.com/problems/permutations-ii/
