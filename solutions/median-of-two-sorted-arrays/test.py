import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findMedianSortedArrays([1,3],[2]), 2.00000)

	def test_1(self):
		self.assertEqual(s.findMedianSortedArrays([1,2],[3,4]), 2.50000)


if __name__ == "__main__":
	unittest.main()