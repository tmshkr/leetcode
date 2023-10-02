import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.rob([1,2,3,1]), 4)

	def test_1(self):
		self.assertEqual(s.rob([2,7,9,3,1]), 12)


if __name__ == "__main__":
	unittest.main()