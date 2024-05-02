from typing import List


class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums.sort(key=lambda x: (len(x), x))
        return nums[-k]


# https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
