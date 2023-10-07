import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.coinChange([1,2,5],11), 3)

	def test_1(self):
		self.assertEqual(s.coinChange([2],3), -1)

	def test_2(self):
		self.assertEqual(s.coinChange([1],0), 0)


if __name__ == "__main__":
	unittest.main()