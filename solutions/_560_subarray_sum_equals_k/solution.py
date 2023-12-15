from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        sum = 0
        dic = {}
        dic[0] = 1
        for i in range(len(nums)):
            sum += nums[i]
            complement = sum - k
            if complement in dic:
                count += dic[complement]
            dic[sum] = dic.get(sum, 0) + 1
        return count


# https://leetcode.com/problems/subarray-sum-equals-k/
