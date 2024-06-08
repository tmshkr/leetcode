from typing import List


class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        res = 0
        stack = []
        prefix = [0]

        for num in nums:
            prefix.append(prefix[-1] + num)

        for i, num in enumerate(nums):
            newStart = i
            while stack and stack[-1][1] > num:
                start, val = stack.pop()
                total = prefix[i] - prefix[start]
                res = max(res, val * total)
                newStart = start
            stack.append((newStart, num))

        for start, val in stack:
            total = prefix[len(nums)] - prefix[start]
            res = max(res, val * total)

        return res % (10**9 + 7)


# https://leetcode.com/problems/maximum-subarray-min-product/
