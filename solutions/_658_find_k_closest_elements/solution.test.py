import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, 5], 4, 3]
        expected = [1, 2, 3, 4]
        actual = s.findClosestElements(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, 5], 4, -1]
        expected = [1, 2, 3, 4]
        actual = s.findClosestElements(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[1], 1, 1]
        expected = [1]
        actual = s.findClosestElements(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
