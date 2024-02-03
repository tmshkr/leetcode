
import unittest
from solution import FreqStack


class TestSolution(unittest.TestCase):
  def test_FreqStack(self):
      freqStack = FreqStack()
      
      self.assertEqual(freqStack.push(5), None)
      self.assertEqual(freqStack.push(7), None)
      self.assertEqual(freqStack.push(5), None)
      self.assertEqual(freqStack.push(7), None)
      self.assertEqual(freqStack.push(4), None)
      self.assertEqual(freqStack.push(5), None)
      self.assertEqual(freqStack.pop(), 5)
      self.assertEqual(freqStack.pop(), 7)
      self.assertEqual(freqStack.pop(), 5)
      self.assertEqual(freqStack.pop(), 4)
        
         
if __name__ == "__main__":
  unittest.main()
