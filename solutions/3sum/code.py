class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        s = set()
        
        for i in range(len(nums)):
            l = i + 1
            r = len(nums) - 1
            while l < r:
                currSum = nums[i] + nums[l] + nums[r]
                if currSum == 0:
                    s.add((nums[i], nums[l], nums[r]))
                    l += 1
                    r -= 1
                elif currSum < 0:
                    l += 1
                else:
                    r -= 1
        
        return list(s)


# https://leetcode.com/problems/3sum/
