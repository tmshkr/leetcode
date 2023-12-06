
import unittest
from solution import MyHashMap


class TestSolution(unittest.TestCase):
  def test_MyHashMap(self):
      myHashMap = MyHashMap()
      
      self.assertEqual(myHashMap.put(1,1), None)
      self.assertEqual(myHashMap.put(2,2), None)
      self.assertEqual(myHashMap.get(1), 1)
      self.assertEqual(myHashMap.get(3), -1)
      self.assertEqual(myHashMap.put(2,1), None)
      self.assertEqual(myHashMap.get(2), 1)
      self.assertEqual(myHashMap.remove(2), None)
      self.assertEqual(myHashMap.get(2), -1)
        
         
if __name__ == "__main__":
  unittest.main()
