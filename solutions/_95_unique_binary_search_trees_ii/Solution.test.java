
package _95_unique_binary_search_trees_ii;

import static org.junit.Assert.assertArrayEquals;
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
  @DisplayName("3")
  void generateTrees0() {
    Solution s = new Solution();
    int n = 3;
    Integer[][] expected = {
        { 1, null, 2, null, 3 },
        { 1, null, 3, 2 },
        { 2, 1, 3 },
        { 3, 1, null, null, 2 },
        { 3, 2, null, 1 },
    };
    List<TreeNode> actual = s.generateTrees(n);
    Integer[][] res = new Integer[actual.size()][];
    for (int i = 0; i < actual.size(); i++) {
      res[i] = converTreeToList(actual.get(i)).toArray(new Integer[0]);
    }
    assertEquals(expected.length, res.length);
    assertArrayEquals(expected, res);
  }

  @Test
  @DisplayName("1")
  void generateTrees1() {
    Solution s = new Solution();
    int n = 1;
    Integer[][] expected = {
        { 1 },
    };
    List<TreeNode> actual = s.generateTrees(n);
    Integer[][] res = new Integer[actual.size()][];
    for (int i = 0; i < actual.size(); i++) {
      res[i] = converTreeToList(actual.get(i)).toArray(new Integer[0]);
    }
    assertEquals(expected.length, res.length);
    assertArrayEquals(expected, res);
  }

}