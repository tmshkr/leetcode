import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]), 20)

	def test_1(self):
		self.assertEqual(s.minCostConnectPoints([[3,12],[-2,5],[-4,1]]), 18)


if __name__ == "__main__":
	unittest.main()