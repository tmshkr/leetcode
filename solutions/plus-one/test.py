import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.plusOne([1,2,3]), [1,2,4])

	def test_1(self):
		self.assertEqual(s.plusOne([4,3,2,1]), [4,3,2,2])

	def test_2(self):
		self.assertEqual(s.plusOne([9]), [1,0])


if __name__ == "__main__":
	unittest.main()