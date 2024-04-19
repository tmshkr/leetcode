
package _129_sum_root_to_leaf_numbers;

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
  @DisplayName("[1,2,3]")
  void sumNumbers0() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 1, 2, 3 };
    TreeNode root = createBinaryTree(levelOrderList);
    assertEquals(25, s.sumNumbers(root));
  }

  @Test
  @DisplayName("[4,9,0,5,1]")
  void sumNumbers1() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 4, 9, 0, 5, 1 };
    TreeNode root = createBinaryTree(levelOrderList);
    assertEquals(1026, s.sumNumbers(root));
  }

}