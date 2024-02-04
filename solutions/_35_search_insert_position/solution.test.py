
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,3,5,6],5]
        expected = 2
        actual = s.searchInsert(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,3,5,6],2]
        expected = 1
        actual = s.searchInsert(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[1,3,5,6],7]
        expected = 4
        actual = s.searchInsert(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
