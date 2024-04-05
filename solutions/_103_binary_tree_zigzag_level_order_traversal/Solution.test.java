
package _103_binary_tree_zigzag_level_order_traversal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private TreeNode createBinaryTree(Integer[] levelOrderList) {
    if (levelOrderList.length == 0) {
      return null;
    }
    TreeNode root = new TreeNode(levelOrderList[0]);
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    int idx = 1;

    while (!q.isEmpty() && idx < levelOrderList.length) {
      TreeNode node = q.poll();
      Integer leftVal = levelOrderList[idx];
      if (leftVal != null) {
        node.left = new TreeNode(leftVal);
        q.add(node.left);
      }
      idx++;

      if (idx < levelOrderList.length) {
        Integer rightVal = levelOrderList[idx];
        if (rightVal != null) {
          node.right = new TreeNode(levelOrderList[idx]);
          q.add(node.right);
        }
        idx++;
      }
    }

    return root;
  }

  @Test
  @DisplayName("[3,9,20,null,null,15,7]")
  void zigzagLevelOrder0() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 3, 9, 20, null, null, 15, 7 };
    TreeNode root = createBinaryTree(levelOrderList);
    List<List<Integer>> actual = s.zigzagLevelOrder(root);
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(3));
    expected.add(Arrays.asList(20, 9));
    expected.add(Arrays.asList(15, 7));
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1]")
  void zigzagLevelOrder1() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 1 };
    TreeNode root = createBinaryTree(levelOrderList);
    List<List<Integer>> actual = s.zigzagLevelOrder(root);
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(1));
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[]")
  void zigzagLevelOrder2() {
    Solution s = new Solution();
    Integer[] levelOrderList = {};
    TreeNode root = createBinaryTree(levelOrderList);
    List<List<Integer>> actual = s.zigzagLevelOrder(root);
    List<List<Integer>> expected = new ArrayList<>();
    assertEquals(expected, actual);
  }

}