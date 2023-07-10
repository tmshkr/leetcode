import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])

	def test_1(self):
		self.assertEqual(s.threeSum([0,1,1]), [])

	def test_2(self):
		self.assertEqual(s.threeSum([0,0,0]), [[0,0,0]])


if __name__ == "__main__":
	unittest.main()