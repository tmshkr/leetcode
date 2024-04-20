
package _337_house_robber_iii;

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
  @DisplayName("[3,2,3,null,3,null,1]")
  void rob0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 3, 2, 3, null, 3, null, 1 });
    assertEquals(7, s.rob(root));
  }

  @Test
  @DisplayName("[3,4,5,1,3,null,1]")
  void rob1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 3, 4, 5, 1, 3, null, 1 });
    assertEquals(9, s.rob(root));
  }

}