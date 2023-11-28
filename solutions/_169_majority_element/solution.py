from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        maj = None

        for n in nums:
            if count == 0:
                maj = n
            if maj == n:
                count += 1
            else:
                count -= 1

        return maj


# https://leetcode.com/problems/majority-element/
