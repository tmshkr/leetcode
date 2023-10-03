import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.rob([2,3,2]), 3)

	def test_1(self):
		self.assertEqual(s.rob([1,2,3,1]), 4)

	def test_2(self):
		self.assertEqual(s.rob([1,2,3]), 3)


if __name__ == "__main__":
	unittest.main()