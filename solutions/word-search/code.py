from typing import List


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ROWS, COLS = len(board), len(board[0])
        VISITED = [
            [False for j in range(COLS)] for i in range(ROWS)
        ]

        def dfs(r, c, i):
            if i == len(word):
                return True
            if (
                r < 0 or
                c < 0 or
                r >= ROWS or
                c >= COLS
            ):
                return False

            if (word[i] != board[r][c]):
                return False

            if (VISITED[r][c]):
                return False

            VISITED[r][c] = True
            res = (
                dfs(r + 1, c, i + 1)
                or dfs(r - 1, c, i + 1)
                or dfs(r, c + 1, i + 1)
                or dfs(r, c - 1, i + 1)
            )
            VISITED[r][c] = False
            return res

        for r in range(ROWS):
            for c in range(COLS):
                if dfs(r, c, 0):
                    return True
        return False


# https://leetcode.com/problems/word-search/
