import unittest
from code import Solution, TreeNode

s = Solution()


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


def find_node(root, val):
    if root is None or root.val == val:
        return root

    if val < root.val:
        return find_node(root.left, val)
    else:
        return find_node(root.right, val)


class TestSolution(unittest.TestCase):
    def test_0(self):
        root = create_binary_tree([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
        p = find_node(root, 2)
        q = find_node(root, 8)
        self.assertEqual(s.lowestCommonAncestor(root, p, q).val, 6)

    def test_1(self):
        root = create_binary_tree([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
        p = find_node(root, 2)
        q = find_node(root, 4)
        self.assertEqual(s.lowestCommonAncestor(root, p, q).val, 2)

    def test_2(self):
        root = create_binary_tree([2, 1])
        p = find_node(root, 2)
        q = find_node(root, 1)
        self.assertEqual(s.lowestCommonAncestor(root, p, q).val, 2)


if __name__ == "__main__":
    unittest.main()
