
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["abcacb","ab",[3,1,0]]
        expected = 2
        actual = s.maximumRemovals(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["abcbddddd","abcd",[3,2,1,4,5,6]]
        expected = 1
        actual = s.maximumRemovals(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = ["abcab","abc",[0,1,2,3,4]]
        expected = 0
        actual = s.maximumRemovals(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
