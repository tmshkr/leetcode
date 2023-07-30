import unittest
from code import TimeMap

class TestSolution(unittest.TestCase):
	def test_0(self):
		timeMap = TimeMap()
		timeMap.set("foo", "bar", 1)
		self.assertEqual(timeMap.get("foo", 1), "bar")
		self.assertEqual(timeMap.get("foo", 3), "bar")
		timeMap.set("foo", "bar2", 4)
		self.assertEqual(timeMap.get("foo", 4), "bar2")
		self.assertEqual(timeMap.get("foo", 5), "bar2")
		

if __name__ == "__main__":
	unittest.main()
	