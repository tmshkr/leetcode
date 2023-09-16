import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxProfit([7,1,5,3,6,4]), 5)

	def test_1(self):
		self.assertEqual(s.maxProfit([7,6,4,3,1]), 0)


if __name__ == "__main__":
	unittest.main()