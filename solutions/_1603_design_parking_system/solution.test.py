
import unittest
from solution import ParkingSystem


class TestSolution(unittest.TestCase):
  def test_ParkingSystem(self):
      parkingSystem = ParkingSystem(1,1,0)
      
      self.assertEqual(parkingSystem.addCar(1), True)
      self.assertEqual(parkingSystem.addCar(2), True)
      self.assertEqual(parkingSystem.addCar(3), False)
      self.assertEqual(parkingSystem.addCar(1), False)
        
         
if __name__ == "__main__":
  unittest.main()
