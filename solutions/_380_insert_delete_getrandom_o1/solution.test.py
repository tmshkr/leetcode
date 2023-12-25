import unittest
from solution import RandomizedSet


class TestSolution(unittest.TestCase):
    def test_RandomizedSet(self):
        randomizedSet = RandomizedSet()

        self.assertEqual(randomizedSet.insert(1), True)
        self.assertEqual(randomizedSet.remove(2), False)
        self.assertEqual(randomizedSet.insert(2), True)
        self.assertIn(randomizedSet.getRandom(), [1, 2])
        self.assertEqual(randomizedSet.remove(1), True)
        self.assertEqual(randomizedSet.insert(2), False)
        self.assertEqual(randomizedSet.getRandom(), 2)


if __name__ == "__main__":
    unittest.main()
