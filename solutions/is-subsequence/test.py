import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.isSubsequence("abc", "ahbgdc"), True)

    def test_1(self):
        self.assertEqual(s.isSubsequence("axc", "ahbgdc"), False)


if __name__ == "__main__":
    unittest.main()
