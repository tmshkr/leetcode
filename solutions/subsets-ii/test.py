import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.subsetsWithDup([1, 2, 2])
        res.sort()
        expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
        self.assertEqual(res, expected)

    def test_1(self):
        res = s.subsetsWithDup([0])
        res.sort()
        expected = [[], [0]]
        self.assertEqual(res, expected)


if __name__ == "__main__":
    unittest.main()
