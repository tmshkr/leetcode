from typing import List


class Solution:
    def arraySign(self, nums: List[int]) -> int:
        sign = 1
        for i in nums:
            if i == 0:
                return 0
            if i < 0:
                sign *= -1

        return sign


# https://leetcode.com/problems/sign-of-the-product-of-an-array/
