
package _606_construct_string_from_binary_tree;

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
  @DisplayName("[1,2,3,4]")
  void tree2str0() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] {1, 2, 3, 4};
    TreeNode root = createBinaryTree(levelOrderList);
    String expected = "1(2(4))(3)";
    assertEquals(expected, s.tree2str(root));
  }
  
  @Test
  @DisplayName("[1,2,3,null,4]")
  void tree2str1() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] {1, 2, 3, null, 4};
    TreeNode root = createBinaryTree(levelOrderList);
    String expected = "1(2()(4))(3)";
    assertEquals(expected, s.tree2str(root));
  }
  
}