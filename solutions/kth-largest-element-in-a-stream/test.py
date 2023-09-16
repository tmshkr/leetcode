import unittest
from solution import KthLargest


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(1, 1)
        kthLargest = KthLargest(3, [4, 5, 8, 2])
        self.assertEqual(kthLargest.add(3), 4)
        self.assertEqual(kthLargest.add(5), 5)
        self.assertEqual(kthLargest.add(10), 5)
        self.assertEqual(kthLargest.add(9), 8)
        self.assertEqual(kthLargest.add(4), 8)


if __name__ == "__main__":
    unittest.main()
