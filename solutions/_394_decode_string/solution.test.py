import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["3[a]2[bc]"]
        expected = "aaabcbc"
        actual = s.decodeString(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["3[a2[c]]"]
        expected = "accaccacc"
        actual = s.decodeString(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["2[abc]3[cd]ef"]
        expected = "abcabccdcdcdef"
        actual = s.decodeString(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
