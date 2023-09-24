import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]), 5)

	def test_1(self):
		self.assertEqual(s.ladderLength("hit","cog",["hot","dot","dog","lot","log"]), 0)


if __name__ == "__main__":
	unittest.main()