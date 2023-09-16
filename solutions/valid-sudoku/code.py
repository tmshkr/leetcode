class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        cols = [set() for _ in range(9)]
        rows = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                num = board[i][j]
                if num == '.':
                    continue

                box = (i // 3) * 3 + j // 3
                if num in cols[i] or num in rows[j] or num in boxes[box]:
                    return False

                cols[i].add(num)
                rows[j].add(num)
                boxes[box].add(num)

        return True
        

# https://leetcode.com/problems/valid-sudoku/
