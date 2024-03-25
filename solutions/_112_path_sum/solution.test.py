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
        inputs = [[5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, 1], 22]
        root = create_binary_tree(inputs[0])
        actual = s.hasPathSum(root, inputs[1])
        expected = True
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 2, 3], 5]
        root = create_binary_tree(inputs[0])
        actual = s.hasPathSum(root, inputs[1])
        expected = False
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[], 0]
        root = create_binary_tree(inputs[0])
        actual = s.hasPathSum(root, inputs[1])
        expected = False
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
