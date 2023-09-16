import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.topKFrequent([1,1,1,2,2,3],2), [1,2])

	def test_1(self):
		self.assertEqual(s.topKFrequent([1],1), [1])


if __name__ == "__main__":
	unittest.main()