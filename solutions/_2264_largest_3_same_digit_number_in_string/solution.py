class Solution:
    def largestGoodInteger(self, num: str) -> str:
        largest = ""
        for i in range(len(num) - 2):
            if num[i] == num[i + 1] == num[i + 2]:
                if num[i] > largest:
                    largest = num[i] * 3
        return largest


# https://leetcode.com/problems/largest-3-same-digit-number-in-string/
