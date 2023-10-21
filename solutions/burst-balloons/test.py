import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxCoins([3,1,5,8]), 167)

	def test_1(self):
		self.assertEqual(s.maxCoins([1,5]), 10)


if __name__ == "__main__":
	unittest.main()