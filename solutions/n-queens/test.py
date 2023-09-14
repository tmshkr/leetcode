import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.solveNQueens(4), [[".Q..", "...Q", "Q...", "..Q."], [
                         "..Q.", "Q...", "...Q", ".Q.."]])

    def test_1(self):
        self.assertEqual(s.solveNQueens(1), [["Q"]])


if __name__ == "__main__":
    unittest.main()
