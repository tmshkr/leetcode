
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["5","2","C","D","+"]]
        expected = 30
        actual = s.calPoints(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [["5","-2","4","C","D","9","+","+"]]
        expected = 27
        actual = s.calPoints(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [["1","C"]]
        expected = 0
        actual = s.calPoints(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
