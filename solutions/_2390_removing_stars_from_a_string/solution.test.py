import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["leet**cod*e"]
        expected = "lecoe"
        actual = s.removeStars(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["erase*****"]
        expected = ""
        actual = s.removeStars(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
