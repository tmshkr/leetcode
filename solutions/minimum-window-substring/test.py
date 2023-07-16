import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.minWindow("ADOBECODEBANC","ABC"), "BANC")

	def test_1(self):
		self.assertEqual(s.minWindow("a","a"), "a")

	def test_2(self):
		self.assertEqual(s.minWindow("a","aa"), "")


if __name__ == "__main__":
	unittest.main()