
package _106_construct_binary_tree_from_inorder_and_postorder_traversal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private static List<Integer> converTreeToList(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    if (root == null) {
      return res;
    }

    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);

    while (!q.isEmpty()) {
      TreeNode node = q.poll();
      if (node != null) {
        res.add(node.val);
        q.add(node.left);
        q.add(node.right);
      } else {
        res.add(null);
      }
    }

    while (res.get(res.size() - 1) == null) {
      res.remove(res.size() - 1);
    }

    return res;
  }


  @Test
  @DisplayName("[9,3,15,20,7],[9,15,7,20,3]")
  void buildTree0() {
    Solution s = new Solution();
    TreeNode root = s.buildTree(new int[] {9, 3, 15, 20, 7}, new int[] {9, 15, 7, 20, 3});
    List<Integer> result = converTreeToList(root);
    assertEquals(Arrays.asList(3, 9, 20, null, null, 15, 7), result);
  }
  
  @Test
  @DisplayName("[-1],[-1]")
  void buildTree1() {
    Solution s = new Solution();
    TreeNode root = s.buildTree(new int[] {-1}, new int[] {-1});
    List<Integer> result = converTreeToList(root);
    assertEquals(Arrays.asList(-1), result);
  }
  
}