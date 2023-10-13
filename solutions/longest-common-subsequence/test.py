import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.longestCommonSubsequence("abcde","ace"), 3  )

	def test_1(self):
		self.assertEqual(s.longestCommonSubsequence("abc","abc"), 3)

	def test_2(self):
		self.assertEqual(s.longestCommonSubsequence("abc","def"), 0)


if __name__ == "__main__":
	unittest.main()