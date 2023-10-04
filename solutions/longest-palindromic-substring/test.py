import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.longestPalindrome("babad"), "bab")

    def test_1(self):
        self.assertEqual(s.longestPalindrome("cbbd"), "bb")


if __name__ == "__main__":
    unittest.main()
