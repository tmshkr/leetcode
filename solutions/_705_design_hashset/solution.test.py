
import unittest
from solution import MyHashSet


class TestSolution(unittest.TestCase):
  def test_MyHashSet(self):
      myHashSet = MyHashSet()
      
      self.assertEqual(myHashSet.add(1), None)
      self.assertEqual(myHashSet.add(2), None)
      self.assertEqual(myHashSet.contains(1), True)
      self.assertEqual(myHashSet.contains(3), False)
      self.assertEqual(myHashSet.add(2), None)
      self.assertEqual(myHashSet.contains(2), True)
      self.assertEqual(myHashSet.remove(2), None)
      self.assertEqual(myHashSet.contains(2), False)
        
         
if __name__ == "__main__":
  unittest.main()
