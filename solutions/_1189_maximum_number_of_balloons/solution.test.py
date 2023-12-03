
import unittest
from solution import Solution
  
  
class TestSolution(unittest.TestCase):
  
      def test_0(self):
          s = Solution()
          inputs = ["nlaebolko"]
          expected = 1
          actual = s.maxNumberOfBalloons(*inputs)
          self.assertEqual(actual, expected)
          
          
      def test_1(self):
          s = Solution()
          inputs = ["loonbalxballpoon"]
          expected = 2
          actual = s.maxNumberOfBalloons(*inputs)
          self.assertEqual(actual, expected)
          
          
      def test_2(self):
          s = Solution()
          inputs = ["leetcode"]
          expected = 0
          actual = s.maxNumberOfBalloons(*inputs)
          self.assertEqual(actual, expected)
          
          

if __name__ == "__main__":
  unittest.main()
