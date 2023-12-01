from typing import List


class NumArray:
    def __init__(self, nums: List[int]):
        self.sums = []
        cur = 0
        for n in nums:
            cur += n
            self.sums.append(cur)

    def sumRange(self, left: int, right: int) -> int:
        r = self.sums[right]
        l = self.sums[left - 1] if left > 0 else 0
        return r - l


# https://leetcode.com/problems/range-sum-query-immutable/
