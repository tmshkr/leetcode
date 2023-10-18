import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]), 4)

	def test_1(self):
		self.assertEqual(s.longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]), 4)

	def test_2(self):
		self.assertEqual(s.longestIncreasingPath([[1]]), 1)


if __name__ == "__main__":
	unittest.main()