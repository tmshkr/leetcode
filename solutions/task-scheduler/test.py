import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.leastInterval(["A","A","A","B","B","B"],2), 8)

	def test_1(self):
		self.assertEqual(s.leastInterval(["A","A","A","B","B","B"],0), 6)

	def test_2(self):
		self.assertEqual(s.leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"],2), 16)


if __name__ == "__main__":
	unittest.main()