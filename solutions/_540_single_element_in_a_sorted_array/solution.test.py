
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,1,2,3,3,4,4,8,8]]
        expected = 2
        actual = s.singleNonDuplicate(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[3,3,7,7,10,11,11]]
        expected = 10
        actual = s.singleNonDuplicate(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
