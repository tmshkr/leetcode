import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["Let's take LeetCode contest"]
        expected = "s'teL ekat edoCteeL tsetnoc"
        actual = s.reverseWords(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["Mr Ding"]
        expected = "rM gniD"
        actual = s.reverseWords(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
