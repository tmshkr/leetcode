import unittest
from solution import StockSpanner


class TestSolution(unittest.TestCase):
    def test_StockSpanner(self):
        stockSpanner = StockSpanner()

        self.assertEqual(stockSpanner.next(100), 1)
        self.assertEqual(stockSpanner.next(80), 1)
        self.assertEqual(stockSpanner.next(60), 1)
        self.assertEqual(stockSpanner.next(70), 2)
        self.assertEqual(stockSpanner.next(60), 1)
        self.assertEqual(stockSpanner.next(75), 4)
        self.assertEqual(stockSpanner.next(85), 6)


if __name__ == "__main__":
    unittest.main()
