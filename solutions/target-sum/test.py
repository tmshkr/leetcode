import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findTargetSumWays([1,1,1,1,1],3), 5)

	def test_1(self):
		self.assertEqual(s.findTargetSumWays([1],1), 1)


if __name__ == "__main__":
	unittest.main()