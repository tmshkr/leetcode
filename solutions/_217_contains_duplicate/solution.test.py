
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,3,1]]
        expected = True
        actual = s.containsDuplicate(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,2,3,4]]
        expected = False
        actual = s.containsDuplicate(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[1,1,1,3,3,4,3,2,4,2]]
        expected = True
        actual = s.containsDuplicate(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
