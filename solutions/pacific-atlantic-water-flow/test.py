import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]), [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]])

	def test_1(self):
		self.assertEqual(s.pacificAtlantic([[1]]), [[0,0]])


if __name__ == "__main__":
	unittest.main()