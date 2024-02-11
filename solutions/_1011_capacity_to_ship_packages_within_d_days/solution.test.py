
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,3,4,5,6,7,8,9,10],5]
        expected = 15
        actual = s.shipWithinDays(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[3,2,2,4,1,4],3]
        expected = 6
        actual = s.shipWithinDays(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[1,2,3,1,1],4]
        expected = 3
        actual = s.shipWithinDays(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
