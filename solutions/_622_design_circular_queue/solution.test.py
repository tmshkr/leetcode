
import unittest
from solution import MyCircularQueue


class TestSolution(unittest.TestCase):
  def test_MyCircularQueue(self):
      myCircularQueue = MyCircularQueue(3)
      
      self.assertEqual(myCircularQueue.enQueue(1), True)
      self.assertEqual(myCircularQueue.enQueue(2), True)
      self.assertEqual(myCircularQueue.enQueue(3), True)
      self.assertEqual(myCircularQueue.enQueue(4), False)
      self.assertEqual(myCircularQueue.Rear(), 3)
      self.assertEqual(myCircularQueue.isFull(), True)
      self.assertEqual(myCircularQueue.deQueue(), True)
      self.assertEqual(myCircularQueue.enQueue(4), True)
      self.assertEqual(myCircularQueue.Rear(), 4)
        
         
if __name__ == "__main__":
  unittest.main()
