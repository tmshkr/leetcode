import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.largestRectangleArea([2,1,5,6,2,3]), 10)

	def test_1(self):
		self.assertEqual(s.largestRectangleArea([2,4]), 4)


if __name__ == "__main__":
	unittest.main()