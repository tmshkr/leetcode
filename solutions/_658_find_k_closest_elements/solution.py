from typing import List


class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        # Find the index of the element closest to x
        L = 0
        R = len(arr) - 1
        while L < R:
            idx = (L + R) // 2
            if arr[idx] < x:
                L = idx + 1
            else:
                R = idx
        # Find the k closest elements
        R = L
        L -= 1
        while R - L - 1 < k:
            if L < 0:
                R += 1
            elif R >= len(arr) or abs(arr[L] - x) <= abs(arr[R] - x):
                L -= 1
            else:
                R += 1

        return arr[L + 1 : R]


# https://leetcode.com/problems/find-k-closest-elements/
