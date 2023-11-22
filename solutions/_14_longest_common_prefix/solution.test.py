import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.longestCommonPrefix(["flower", "flow", "flight"]), "fl")

    def test_1(self):
        self.assertEqual(s.longestCommonPrefix(["dog", "racecar", "car"]), "")


if __name__ == "__main__":
    unittest.main()
