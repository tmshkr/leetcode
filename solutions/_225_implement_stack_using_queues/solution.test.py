
import unittest
from solution import MyStack


class TestSolution(unittest.TestCase):
  def test_MyStack(self):
      myStack = MyStack()
      
      self.assertEqual(myStack.push(1), None)
      self.assertEqual(myStack.push(2), None)
      self.assertEqual(myStack.top(), 2)
      self.assertEqual(myStack.pop(), 2)
      self.assertEqual(myStack.empty(), False)
        
         
if __name__ == "__main__":
  unittest.main()
