import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findKthLargest([3,2,1,5,6,4],2), 5)

	def test_1(self):
		self.assertEqual(s.findKthLargest([3,2,3,1,2,4,5,5,6],4), 4)


if __name__ == "__main__":
	unittest.main()