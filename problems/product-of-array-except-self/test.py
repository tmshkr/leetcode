import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.productExceptSelf([1,2,3,4]), [24,12,8,6])

	def test_1(self):
		self.assertEqual(s.productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])


if __name__ == "__main__":
	unittest.main()