
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[7,1,5,3,6,4]]
        expected = 7
        actual = s.maxProfit(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,2,3,4,5]]
        expected = 4
        actual = s.maxProfit(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[7,6,4,3,1]]
        expected = 0
        actual = s.maxProfit(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
