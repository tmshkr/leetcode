from typing import List


class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        map = {}
        map[0] = -1
        sum = 0
        for i, num in enumerate(nums):
            sum += num
            sum %= k
            if sum in map:
                if i - map[sum] > 1:
                    return True
            else:
                map[sum] = i
        return False


# https://leetcode.com/problems/continuous-subarray-sum/
