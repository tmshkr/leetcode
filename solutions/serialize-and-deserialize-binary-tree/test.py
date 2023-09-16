import unittest
from solution import Codec, TreeNode


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


def level_order_traversal(root):
    if root is None:
        return []

    result = []
    queue = [root]

    while queue:
        current_node = queue.pop(0)  # Dequeue the front node
        result.append(current_node.val if current_node else None)

        if current_node:
            queue.append(current_node.left)
            queue.append(current_node.right)

    for i in range(len(result)-1, -1, -1):
        if (result[i]):
            break

        result.pop()

    return result


class TestSolution(unittest.TestCase):
    def test_0(self):
        ser = Codec()
        deser = Codec()
        ans = deser.deserialize(ser.serialize(
            create_binary_tree([1, 2, 3, None, None, 4, 5])))
        self.assertEqual(level_order_traversal(
            ans), [1, 2, 3, None, None, 4, 5])

    def test_1(self):
        ser = Codec()
        deser = Codec()
        ans = deser.deserialize(ser.serialize(
            create_binary_tree([])))
        self.assertEqual(level_order_traversal(ans), [])


if __name__ == "__main__":
    unittest.main()
