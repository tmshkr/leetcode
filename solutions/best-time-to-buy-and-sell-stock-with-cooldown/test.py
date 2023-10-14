import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxProfit([1,2,3,0,2]), 3)

	def test_1(self):
		self.assertEqual(s.maxProfit([1]), 0)


if __name__ == "__main__":
	unittest.main()