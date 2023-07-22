from typing import List
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []  # pair: [temp, index]

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                stackInd = stack.pop()[1]
                res[stackInd] = i - stackInd
            stack.append((t, i))
        return res


# https://leetcode.com/problems/daily-temperatures/
