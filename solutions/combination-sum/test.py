import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]])

    def test_1(self):
        self.assertEqual(s.combinationSum([2, 3, 5], 8), [
                         [2, 2, 2, 2], [2, 3, 3], [3, 5]])

    def test_2(self):
        self.assertEqual(s.combinationSum([2], 1), [])


if __name__ == "__main__":
    unittest.main()
