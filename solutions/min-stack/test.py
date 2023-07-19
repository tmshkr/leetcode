import unittest
from code import MinStack

class TestSolution(unittest.TestCase):
	def test_0(self):
		minStack = MinStack()
		minStack.push(-2)
		minStack.push(0)
		minStack.push(-3)
		self.assertEqual(minStack.getMin(), -3)
		minStack.pop()
		self.assertEqual(minStack.top(), 0)
		self.assertEqual(minStack.getMin(), -2)


if __name__ == "__main__":
	unittest.main()