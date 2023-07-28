import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findMin([3,4,5,1,2]), 1)

	def test_1(self):
		self.assertEqual(s.findMin([4,5,6,7,0,1,2]), 0)

	def test_2(self):
		self.assertEqual(s.findMin([11,13,15,17]), 11)


if __name__ == "__main__":
	unittest.main()