import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.kClosest([[1,3],[-2,2]],1), [[-2,2]])

	def test_1(self):
		self.assertEqual(s.kClosest([[3,3],[5,-1],[-2,4]],2), [[3,3],[-2,4]])


if __name__ == "__main__":
	unittest.main()