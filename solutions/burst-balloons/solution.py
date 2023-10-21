from typing import List


class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [[0 for _ in range(n+2)] for _ in range(n+2)]

        nums = [1] + nums + [1]

        for l in range(1, n+1):
            for i in range(1, n-l+2):
                j = i + l - 1
                for k in range(i, j+1):
                    dp[i][j] = max(dp[i][j], dp[i][k-1] + nums[i-1]
                                   * nums[k]*nums[j+1] + dp[k+1][j])

        return dp[1][n]

# https://leetcode.com/problems/burst-balloons/
