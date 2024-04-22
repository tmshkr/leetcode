import unittest
from solution import LockingTree


class TestSolution(unittest.TestCase):
    def test_LockingTree(self):
        lockingTree = LockingTree([-1, 0, 0, 1, 1, 2, 2])

        self.assertEqual(lockingTree.lock(2, 2), True)
        self.assertEqual(lockingTree.unlock(2, 3), False)
        self.assertEqual(lockingTree.unlock(2, 2), True)
        self.assertEqual(lockingTree.lock(4, 5), True)
        self.assertEqual(lockingTree.upgrade(0, 1), True)
        self.assertEqual(lockingTree.lock(0, 1), False)


if __name__ == "__main__":
    unittest.main()
