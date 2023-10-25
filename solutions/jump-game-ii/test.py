import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.jump([2,3,1,1,4]), 2)

	def test_1(self):
		self.assertEqual(s.jump([2,3,0,1,4]), 2)


if __name__ == "__main__":
	unittest.main()