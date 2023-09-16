import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.twoSum([2,7,11,15],9), [1,2])

	def test_1(self):
		self.assertEqual(s.twoSum([2,3,4],6), [1,3])

	def test_2(self):
		self.assertEqual(s.twoSum([-1,0],-1), [1,2])


if __name__ == "__main__":
	unittest.main()