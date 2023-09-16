import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findDuplicate([1,3,4,2,2]), 2)

	def test_1(self):
		self.assertEqual(s.findDuplicate([3,1,3,4,2]), 3)


if __name__ == "__main__":
	unittest.main()