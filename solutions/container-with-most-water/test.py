import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxArea([1,8,6,2,5,4,8,3,7]), 49)

	def test_1(self):
		self.assertEqual(s.maxArea([1,1]), 1)


if __name__ == "__main__":
	unittest.main()