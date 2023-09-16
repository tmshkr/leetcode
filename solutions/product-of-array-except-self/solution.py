class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res = [0] * len(nums)
        left = 1
        right = 1

        for i in range(len(nums)):
            res[i] = left
            left *= nums[i]
        

        for i in range(len(nums) - 1, -1, -1):
            res[i] *= right
            right *= nums[i]
        
        return res

        

# https://leetcode.com/problems/product-of-array-except-self/
