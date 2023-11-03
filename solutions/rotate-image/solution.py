from typing import List

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        l = 0
        r = len(matrix) - 1
        while l < r:
            for i in range(r - l):
                top = matrix[l][l + i]
                right = matrix[l + i][r]
                bottom = matrix[r][r - i]
                left = matrix[r - i][l]

                matrix[l][l + i] = left
                matrix[l + i][r] = top
                matrix[r][r - i] = right
                matrix[r - i][l] = bottom

            r -= 1
            l += 1

        

# https://leetcode.com/problems/rotate-image/
