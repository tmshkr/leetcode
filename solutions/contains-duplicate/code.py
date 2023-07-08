class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        ht = {}
        for num in nums:
            if num in ht:
                return True
            else:
                ht[num] = 1

        return False


# https://leetcode.com/problems/contains-duplicate/
