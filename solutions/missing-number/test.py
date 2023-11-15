import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.missingNumber([3,0,1]), 2)

	def test_1(self):
		self.assertEqual(s.missingNumber([0,1]), 2)

	def test_2(self):
		self.assertEqual(s.missingNumber([9,6,4,2,3,5,7,0,1]), 8)


if __name__ == "__main__":
	unittest.main()