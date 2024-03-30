import unittest
from solution import Solution, TreeNode


def create_binary_tree(level_order_list):
    if not level_order_list:
        return None

    root = TreeNode(level_order_list[0])
    queue = [root]
    index = 1

    while queue and index < len(level_order_list):
        node = queue.pop(0)

        left_val = level_order_list[index]
        if left_val is not None:
            node.left = TreeNode(left_val)
            queue.append(node.left)
        index += 1

        if index < len(level_order_list):
            right_val = level_order_list[index]
            if right_val is not None:
                node.right = TreeNode(right_val)
                queue.append(node.right)
            index += 1

    return root


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 2, 3, 4, 4, 3]]
        expected = True
        root = create_binary_tree(*inputs)
        actual = s.isSymmetric(root)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 2, 2, None, 3, None, 3]]
        expected = False
        root = create_binary_tree(*inputs)
        actual = s.isSymmetric(root)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
