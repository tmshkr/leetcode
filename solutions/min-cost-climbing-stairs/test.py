import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.minCostClimbingStairs([10,15,20]), 15)

	def test_1(self):
		self.assertEqual(s.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]), 6)


if __name__ == "__main__":
	unittest.main()