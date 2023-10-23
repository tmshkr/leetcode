import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)

	def test_1(self):
		self.assertEqual(s.maxSubArray([1]), 1)

	def test_2(self):
		self.assertEqual(s.maxSubArray([5,4,-1,7,8]), 23)


if __name__ == "__main__":
	unittest.main()