import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.numDecodings("12"), 2)

	def test_1(self):
		self.assertEqual(s.numDecodings("226"), 3)

	def test_2(self):
		self.assertEqual(s.numDecodings("06"), 0)


if __name__ == "__main__":
	unittest.main()