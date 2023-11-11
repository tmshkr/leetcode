import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.singleNumber([2,2,1]), 1)

	def test_1(self):
		self.assertEqual(s.singleNumber([4,1,2,1,2]), 4)

	def test_2(self):
		self.assertEqual(s.singleNumber([1]), 1)


if __name__ == "__main__":
	unittest.main()