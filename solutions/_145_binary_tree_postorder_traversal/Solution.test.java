
package _145_binary_tree_postorder_traversal;

import java.util.*;

import static org.junit.Assert.assertArrayEquals;
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
  @DisplayName("[1,null,2,3]")
  void postorderTraversal0() {
    Solution s = new Solution();
    // inputs = [1,null,2,3]
    // expected = 3,2,1

    TreeNode root = createBinaryTree(new Integer[] { 1, null, 2, 3 });
    List<Integer> expected = new ArrayList<Integer>();
    expected.add(3);
    expected.add(2);
    expected.add(1);
    assertArrayEquals(expected.toArray(), s.postorderTraversal(root).toArray());
  }

  @Test
  @DisplayName("[]")
  void postorderTraversal1() {
    Solution s = new Solution();
    // inputs = []
    // expected =

    TreeNode root = createBinaryTree(new Integer[] {});
    List<Integer> expected = new ArrayList<Integer>();
    assertArrayEquals(expected.toArray(), s.postorderTraversal(root).toArray());
  }

  @Test
  @DisplayName("[1]")
  void postorderTraversal2() {
    Solution s = new Solution();
    // inputs = [1]
    // expected = 1

    TreeNode root = createBinaryTree(new Integer[] { 1 });
    List<Integer> expected = new ArrayList<Integer>();
    expected.add(1);
    assertArrayEquals(expected.toArray(), s.postorderTraversal(root).toArray());
  }

}