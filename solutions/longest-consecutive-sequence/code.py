class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums_set = set(nums)
        max_len = 0
        for num in nums:
            if num - 1 not in nums_set:
                curr_len = 1
                while num + curr_len in nums_set:
                    curr_len += 1
                max_len = max(max_len, curr_len)
        
        return max_len
        

# https://leetcode.com/problems/longest-consecutive-sequence/
