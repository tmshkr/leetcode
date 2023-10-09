import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.wordBreak("leetcode", ["leet", "code"]), True)

    def test_1(self):
        self.assertEqual(s.wordBreak("applepenapple", ["apple", "pen"]), True)

    def test_2(self):
        self.assertEqual(s.wordBreak(
            "catsandog", ["cats", "dog", "sand", "and", "cat"]), False)


if __name__ == "__main__":
    unittest.main()
