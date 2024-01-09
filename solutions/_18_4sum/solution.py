from typing import List


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        length = len(nums)
        result = []

        for a in range(length):
            if a > 0 and nums[a] == nums[a - 1]:
                continue
            for b in range(a + 1, length):
                if b > a + 1 and nums[b] == nums[b - 1]:
                    continue
                c = b + 1
                d = length - 1
                while c < d:
                    sum = nums[a] + nums[b] + nums[c] + nums[d]
                    if sum == target:
                        result.append([nums[a], nums[b], nums[c], nums[d]])
                        c += 1
                        d -= 1
                        while c < d and nums[c] == nums[c - 1]:
                            c += 1
                        while c < d and nums[d] == nums[d + 1]:
                            d -= 1
                    elif sum < target:
                        c += 1
                    else:
                        d -= 1
        return result


# https://leetcode.com/problems/4sum/
