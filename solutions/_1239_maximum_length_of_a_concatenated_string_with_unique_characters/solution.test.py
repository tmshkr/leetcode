
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["un","iq","ue"]]
        expected = 4
        actual = s.maxLength(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [["cha","r","act","ers"]]
        expected = 6
        actual = s.maxLength(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [["abcdefghijklmnopqrstuvwxyz"]]
        expected = 26
        actual = s.maxLength(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
