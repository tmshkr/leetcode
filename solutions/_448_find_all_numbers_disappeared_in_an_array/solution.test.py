
import unittest
from solution import Solution
  
  
class TestSolution(unittest.TestCase):
  
      def test_0(self):
          s = Solution()
          inputs = [[4,3,2,7,8,2,3,1]]
          expected = [5,6]
          actual = s.findDisappearedNumbers(*inputs)
          self.assertEqual(actual, expected)
          
          
      def test_1(self):
          s = Solution()
          inputs = [[1,1]]
          expected = [2]
          actual = s.findDisappearedNumbers(*inputs)
          self.assertEqual(actual, expected)
          
          

if __name__ == "__main__":
  unittest.main()
