import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1, 1, 2]]
        expected = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
        actual = s.permuteUnique(*inputs)
        self.assertEqual(len(actual), len(expected))
        for a in actual:
            self.assertIn(a, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 2, 3]]
        expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
        actual = s.permuteUnique(*inputs)
        self.assertEqual(len(actual), len(expected))
        for a in actual:
            self.assertIn(a, expected)


if __name__ == "__main__":
    unittest.main()
