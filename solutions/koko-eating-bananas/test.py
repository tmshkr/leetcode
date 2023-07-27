import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.minEatingSpeed([3,6,7,11],8), 4)

	def test_1(self):
		self.assertEqual(s.minEatingSpeed([30,11,23,4,20],5), 30)

	def test_2(self):
		self.assertEqual(s.minEatingSpeed([30,11,23,4,20],6), 23)


if __name__ == "__main__":
	unittest.main()