class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        ht = {}

        for i, num in enumerate(nums):
            complement = target - num
            if complement in ht:
                return [ht[complement], i]
            else:
                ht[num] = i


# https://leetcode.com/problems/two-sum/
