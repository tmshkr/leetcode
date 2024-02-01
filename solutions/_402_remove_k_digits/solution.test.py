import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["1432219", 3]
        expected = "1219"
        actual = s.removeKdigits(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["10200", 1]
        expected = "200"
        actual = s.removeKdigits(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["10", 2]
        expected = "0"
        actual = s.removeKdigits(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
