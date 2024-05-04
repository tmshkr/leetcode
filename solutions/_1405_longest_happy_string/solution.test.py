import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [1, 1, 7]
        expected = "ccaccbcc"
        actual = s.longestDiverseString(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [7, 1, 0]
        expected = "aabaa"
        actual = s.longestDiverseString(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
