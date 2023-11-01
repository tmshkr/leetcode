import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]), 1)

	def test_1(self):
		self.assertEqual(s.eraseOverlapIntervals([[1,2],[1,2],[1,2]]), 2)

	def test_2(self):
		self.assertEqual(s.eraseOverlapIntervals([[1,2],[2,3]]), 0)


if __name__ == "__main__":
	unittest.main()