import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.lengthOfLIS([10,9,2,5,3,7,101,18]), 4)

	def test_1(self):
		self.assertEqual(s.lengthOfLIS([0,1,0,3,2,3]), 4)

	def test_2(self):
		self.assertEqual(s.lengthOfLIS([7,7,7,7,7,7,7]), 1)


if __name__ == "__main__":
	unittest.main()