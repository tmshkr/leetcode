import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.letterCombinations("23"), [
                         "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])

    def test_1(self):
        self.assertEqual(s.letterCombinations(""), [])

    def test_2(self):
        self.assertEqual(s.letterCombinations("2"), ["a", "b", "c"])


if __name__ == "__main__":
    unittest.main()
