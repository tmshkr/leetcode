import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["abcd", 2]
        expected = "abcd"
        actual = s.removeDuplicates(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["deeedbbcccbdaa", 3]
        expected = "aa"
        actual = s.removeDuplicates(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["pbbcggttciiippooaais", 2]
        expected = "ps"
        actual = s.removeDuplicates(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
