import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.partition("aab"), [["a","a","b"],["aa","b"]])

	def test_1(self):
		self.assertEqual(s.partition("a"), [["a"]])


if __name__ == "__main__":
	unittest.main()