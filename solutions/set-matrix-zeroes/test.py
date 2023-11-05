import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		arr = [[1,1,1],[1,0,1],[1,1,1]]
		s.setZeroes(arr)
		self.assertEqual(arr, [[1,0,1],[0,0,0],[1,0,1]])

	def test_1(self):
		arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
		s.setZeroes(arr)
		self.assertEqual(arr, [[0,0,0,0],[0,4,5,0],[0,3,1,0]])


if __name__ == "__main__":
	unittest.main()