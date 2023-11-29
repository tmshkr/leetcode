from typing import List


class Solution:
    def nextGreaterElement(self, a: List[int], b: List[int]) -> List[int]:
        val2idx = {n: i for i, n in enumerate(a)}
        res = [-1] * len(a)

        stack = []
        for i in range(len(b)):
            cur = b[i]

            while stack and cur > stack[-1]:
                val = stack.pop()
                idx = val2idx[val]
                res[idx] = cur

            if cur in val2idx:
                stack.append(cur)

        return res


# https://leetcode.com/problems/next-greater-element-i/
