import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.lengthOfLongestSubstring("abcabcbb"), 3)

	def test_1(self):
		self.assertEqual(s.lengthOfLongestSubstring("bbbbb"), 1)

	def test_2(self):
		self.assertEqual(s.lengthOfLongestSubstring("pwwkew"), 3)


if __name__ == "__main__":
	unittest.main()