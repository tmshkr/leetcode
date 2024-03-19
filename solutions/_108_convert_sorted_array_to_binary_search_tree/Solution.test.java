
package _108_convert_sorted_array_to_binary_search_tree;

import java.util.*;

import static org.junit.Assert.assertArrayEquals;

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
  @DisplayName("[-10,-3,0,5,9]")
  void sortedArrayToBST0() {
    TreeNode root = Solution.sortedArrayToBST(new int[] { -10, -3, 0, 5, 9 });
    List<Integer> res = converTreeToList(root);
    Integer[] expected = new Integer[] { 0, -3, 9, -10, null, 5 };
    assertArrayEquals(expected, res.toArray());
  }

  @Test
  @DisplayName("[1,3]")
  void sortedArrayToBST1() {
    TreeNode root = Solution.sortedArrayToBST(new int[] { 1, 3 });
    List<Integer> res = converTreeToList(root);
    Integer[] expected = new Integer[] { 3, 1 };
    assertArrayEquals(expected, res.toArray());
  }

}