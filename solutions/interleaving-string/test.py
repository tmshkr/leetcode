import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.isInterleave("aabcc", "dbbca", "aadbbcbcac"), True)

    def test_1(self):
        self.assertEqual(s.isInterleave("aabcc", "dbbca", "aadbbbaccc"), False)

    def test_2(self):
        self.assertEqual(s.isInterleave("", "", ""), True)


if __name__ == "__main__":
    unittest.main()
