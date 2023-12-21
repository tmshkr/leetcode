import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[10, 2]]
        expected = "210"
        actual = s.largestNumber(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[3, 30, 34, 5, 9]]
        expected = "9534330"
        actual = s.largestNumber(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
