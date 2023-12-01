import unittest
from solution import NumArray


class TestSolution(unittest.TestCase):
    def test_NumArray(self):
        numArray = NumArray([-2, 0, 3, -5, 2, -1])

        self.assertEqual(numArray.sumRange(0, 2), 1)

        self.assertEqual(numArray.sumRange(2, 5), -1)

        self.assertEqual(numArray.sumRange(0, 5), -3)


if __name__ == "__main__":
    unittest.main()
