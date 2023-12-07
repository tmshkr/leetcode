from typing import List


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        self.mergeSort(nums, 0, len(nums) - 1)
        return nums

    def mergeSort(self, arr: List[int], lo: int, hi: int) -> List[int]:
        if lo >= hi:
            return
        mid = (lo + hi) // 2
        self.mergeSort(arr, lo, mid)
        self.mergeSort(arr, mid + 1, hi)
        self.merge(arr, lo, mid, hi)

    def merge(self, arr: List[int], lo: int, mid: int, hi: int) -> List[int]:
        temp = []
        l = lo
        r = mid + 1

        while l <= mid and r <= hi:
            if arr[l] <= arr[r]:
                temp.append(arr[l])
                l += 1
            else:
                temp.append(arr[r])
                r += 1

        while l <= mid:
            temp.append(arr[l])
            l += 1

        while r <= hi:
            temp.append(arr[r])
            r += 1

        for i in range(lo, hi + 1):
            arr[i] = temp[i - lo]


# https://leetcode.com/problems/sort-an-array/
