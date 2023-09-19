import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        board = [["X", "X", "X", "X"],
                 ["X", "O", "O", "X"],
                 ["X", "X", "O", "X"],
                 ["X", "O", "X", "X"]]
        s.solve(board)
        self.assertEqual(board, [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"]])

    def test_1(self):
        board = [["X"]]
        s.solve(board)
        self.assertEqual(board, [["X"]])


if __name__ == "__main__":
    unittest.main()
