from typing import List


class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        s1 = set(nums1)
        s2 = set(nums2)

        return [[n for n in s1 if n not in s2], [n for n in s2 if n not in s1]]


# https://leetcode.com/problems/find-the-difference-of-two-arrays/
