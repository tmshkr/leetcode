import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3), True)

	def test_1(self):
		self.assertEqual(s.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13), False)


if __name__ == "__main__":
	unittest.main()