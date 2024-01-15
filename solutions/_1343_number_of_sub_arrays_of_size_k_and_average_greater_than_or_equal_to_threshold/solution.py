from typing import List


class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        count = 0
        cur_sum = 0
        i = 0
        j = 0

        while j < len(arr):
            cur_sum += arr[j]
            if j - i + 1 == k:
                if cur_sum / k >= threshold:
                    count += 1
                cur_sum -= arr[i]
                i += 1
            j += 1

        return count


# https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
