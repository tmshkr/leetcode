
package _958_check_completeness_of_a_binary_tree;

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
  @DisplayName("[1,2,3,4,5,6]")
  void isCompleteTree0() {
    Solution s = new Solution();
    // inputs = [1,2,3,4,5,6]
    // expected = true

    Integer[] levelOrderList = new Integer[] {1, 2, 3, 4, 5, 6};
    TreeNode root = createBinaryTree(levelOrderList);
    boolean actual = s.isCompleteTree(root);
    boolean expected = true;
    assertEquals(expected, actual);
  }
  
  @Test
  @DisplayName("[1,2,3,4,5,null,7]")
  void isCompleteTree1() {
    Solution s = new Solution();
    // inputs = [1,2,3,4,5,null,7]
    // expected = false

    Integer[] levelOrderList = new Integer[] {1, 2, 3, 4, 5, null, 7};
    TreeNode root = createBinaryTree(levelOrderList);
    boolean actual = s.isCompleteTree(root);
    boolean expected = false;
    assertEquals(expected, actual);
  }
  
}