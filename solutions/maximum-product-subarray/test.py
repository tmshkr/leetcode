import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxProduct([2,3,-2,4]), 6)

	def test_1(self):
		self.assertEqual(s.maxProduct([-2,0,-1]), 0)


if __name__ == "__main__":
	unittest.main()