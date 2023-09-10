import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6]
        ])

    def test_1(self):
        self.assertEqual(s.combinationSum2([2, 5, 2, 1, 2], 5), [
            [1, 2, 2],
            [5]
        ])


if __name__ == "__main__":
    unittest.main()
