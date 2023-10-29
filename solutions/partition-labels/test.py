import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.partitionLabels("ababcbacadefegdehijhklij"), [9,7,8])

	def test_1(self):
		self.assertEqual(s.partitionLabels("eccbbbbdec"), [10])


if __name__ == "__main__":
	unittest.main()