
import unittest
from solution import SeatManager


class TestSolution(unittest.TestCase):
  def test_SeatManager(self):
      seatManager = SeatManager(5)
      
      self.assertEqual(seatManager.reserve(), 1)
      self.assertEqual(seatManager.reserve(), 2)
      self.assertEqual(seatManager.unreserve(2), None)
      self.assertEqual(seatManager.reserve(), 2)
      self.assertEqual(seatManager.reserve(), 3)
      self.assertEqual(seatManager.reserve(), 4)
      self.assertEqual(seatManager.reserve(), 5)
      self.assertEqual(seatManager.unreserve(5), None)
        
         
if __name__ == "__main__":
  unittest.main()
