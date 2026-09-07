import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        words = ["mass", "as", "hero", "superhero"]
        expected = ["as", "hero"]
        actual = Solution().stringMatching(words)
        self.assertCountEqual(actual, expected)

    def test_1(self):
        words = ["leetcode", "et", "code"]
        expected = ["et", "code"]
        actual = Solution().stringMatching(words)
        self.assertCountEqual(actual, expected)

    def test_2(self):
        words = ["blue", "green", "bu"]
        expected = []
        actual = Solution().stringMatching(words)
        self.assertCountEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
