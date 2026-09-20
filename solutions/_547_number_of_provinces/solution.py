from typing import List

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False] * n
        count = 0

        for i in range(n):
            if not visited[i]:
                self.dfs(isConnected, visited, i)
                count += 1

        return count

    def dfs(self, isConnected: List[List[int]], visited: List[bool], i: int) -> None:
        visited[i] = True
        for j in range(len(isConnected)):
            if isConnected[i][j] == 1 and not visited[j]:
                self.dfs(isConnected, visited, j)


# https://leetcode.com/problems/number-of-provinces/
