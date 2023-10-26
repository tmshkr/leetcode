import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]), 3)

	def test_1(self):
		self.assertEqual(s.canCompleteCircuit([2,3,4],[3,4,3]), -1)


if __name__ == "__main__":
	unittest.main()