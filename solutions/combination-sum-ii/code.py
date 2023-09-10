from typing import List


class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        res = []

        def backtrack(target, path=[], index=0):
            if target == 0:
                res.append(path.copy())
                return
            if target <= 0:
                return

            prev = -1
            for i in range(index, len(candidates)):
                if candidates[i] == prev:
                    continue
                path.append(candidates[i])
                backtrack(target - candidates[i], path, i + 1)
                path.pop()
                prev = candidates[i]

        backtrack(target)
        return res
