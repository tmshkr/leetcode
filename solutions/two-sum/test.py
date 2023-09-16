import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.twoSum([2,7,11,15],9), [0,1])

	def test_1(self):
		self.assertEqual(s.twoSum([3,2,4],6), [1,2])

	def test_2(self):
		self.assertEqual(s.twoSum([3,3],6), [0,1])


if __name__ == "__main__":
	unittest.main()