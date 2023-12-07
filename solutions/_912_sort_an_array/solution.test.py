import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[5, 2, 3, 1]]
        expected = [1, 2, 3, 5]
        actual = s.sortArray(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[5, 1, 1, 2, 0, 0]]
        expected = [0, 0, 1, 1, 2, 5]
        actual = s.sortArray(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
