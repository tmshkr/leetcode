
import unittest
from solution import Solution
  
  
class TestSolution(unittest.TestCase):
  
      def test_0(self):
          s = Solution()
          inputs = ["abba","dog cat cat dog"]
          expected = True
          actual = s.wordPattern(*inputs)
          self.assertEqual(actual, expected)
          
          
      def test_1(self):
          s = Solution()
          inputs = ["abba","dog cat cat fish"]
          expected = False
          actual = s.wordPattern(*inputs)
          self.assertEqual(actual, expected)
          
          
      def test_2(self):
          s = Solution()
          inputs = ["aaaa","dog cat cat dog"]
          expected = False
          actual = s.wordPattern(*inputs)
          self.assertEqual(actual, expected)
          
          

if __name__ == "__main__":
  unittest.main()
