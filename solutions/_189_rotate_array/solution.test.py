import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, 5, 6, 7], 3]
        expected = [5, 6, 7, 1, 2, 3, 4]
        s.rotate(*inputs)
        self.assertEqual(inputs[0], expected)

    def test_1(self):
        s = Solution()
        inputs = [[-1, -100, 3, 99], 2]
        expected = [3, 99, -1, -100]
        s.rotate(*inputs)
        self.assertEqual(inputs[0], expected)


if __name__ == "__main__":
    unittest.main()
