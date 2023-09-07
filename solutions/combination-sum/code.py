from typing import List


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i=0, total=0, cur=[]):
            if total == target:
                res.append(cur.copy())
                return
            if i >= len(candidates) or total > target:
                return

            cur.append(candidates[i])
            dfs(i, total + candidates[i], cur)
            cur.pop()
            dfs(i + 1, total, cur)

        dfs()
        return res


# https://leetcode.com/problems/combination-sum/
