import unittest
from solution import BSTIterator
from test_helpers.binary_tree import create_binary_tree


class TestSolution(unittest.TestCase):
    def test_BSTIterator(self):
        itr = BSTIterator(create_binary_tree([7, 3, 15, None, None, 9, 20]))

        self.assertEqual(itr.next(), 3)
        self.assertEqual(itr.next(), 7)
        self.assertEqual(itr.hasNext(), True)
        self.assertEqual(itr.next(), 9)
        self.assertEqual(itr.hasNext(), True)
        self.assertEqual(itr.next(), 15)
        self.assertEqual(itr.hasNext(), True)
        self.assertEqual(itr.next(), 20)
        self.assertEqual(itr.hasNext(), False)


if __name__ == "__main__":
    unittest.main()
