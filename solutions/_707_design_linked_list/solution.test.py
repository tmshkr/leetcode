
import unittest
from solution import MyLinkedList


class TestSolution(unittest.TestCase):
  def test_MyLinkedList(self):
      myLinkedList = MyLinkedList()
      
      self.assertEqual(myLinkedList.addAtHead(1), None)
      self.assertEqual(myLinkedList.addAtTail(3), None)
      self.assertEqual(myLinkedList.addAtIndex(1,2), None)
      self.assertEqual(myLinkedList.get(1), 2)
      self.assertEqual(myLinkedList.deleteAtIndex(1), None)
      self.assertEqual(myLinkedList.get(1), 3)
        
         
if __name__ == "__main__":
  unittest.main()
