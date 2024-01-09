import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[1, 0, -1, 0, -2, 2], 0]
        expected = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
        actual = s.fourSum(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[2, 2, 2, 2, 2], 8]
        expected = [[2, 2, 2, 2]]
        actual = s.fourSum(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
