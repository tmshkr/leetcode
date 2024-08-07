from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(start, path):
            if len(path) == k:
                res.append(path[:])
            else:
                for i in range(start, n + 1):
                    path.append(i)
                    backtrack(i + 1, path)
                    path.pop()

        res = []
        backtrack(1, [])
        return res


# https://leetcode.com/problems/combinations/
