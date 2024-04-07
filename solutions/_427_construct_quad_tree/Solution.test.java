
package _427_construct_quad_tree;

import static org.junit.Assert.assertArrayEquals;

import java.util.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private List<Integer[]> traverse(Node node) {
    List<Integer[]> res = new ArrayList<>();
    Queue<Node> q = new LinkedList<>();
    q.add(node);

    while (!q.isEmpty()) {
      int n = q.size();
      for (int i = 0; i < n; i++) {
        Node cur = q.poll();
        if (cur == null) {
          res.add(null);
        } else {
          res.add(new Integer[] { cur.isLeaf ? 1 : 0, cur.val ? 1 : 0 });
          q.add(cur.topLeft);
          q.add(cur.topRight);
          q.add(cur.bottomLeft);
          q.add(cur.bottomRight);
        }
      }
    }

    int i = res.size() - 1;
    while (i >= 0 && res.get(i) == null) {
      res.remove(i);
      i--;
    }

    return res;
  }

  @Test
  @DisplayName("[[0,1],[1,0]]")
  void construct0() {
    Solution s = new Solution();
    Node actual = s.construct(new int[][] { { 0, 1 }, { 1, 0 } });
    Integer[][] expected = new Integer[][] {
        { 0, 1 },
        { 1, 0 },
        { 1, 1 },
        { 1, 1 },
        { 1, 0 } };
    assertArrayEquals(expected, traverse(actual).toArray());
  }

  @Test
  @DisplayName("[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]")
  void construct1() {
    Solution s = new Solution();
    Node actual = s.construct(new int[][] {
        { 1, 1, 1, 1, 0, 0, 0, 0 },
        { 1, 1, 1, 1, 0, 0, 0, 0 },
        { 1, 1, 1, 1, 1, 1, 1, 1 },
        { 1, 1, 1, 1, 1, 1, 1, 1 },
        { 1, 1, 1, 1, 0, 0, 0, 0 },
        { 1, 1, 1, 1, 0, 0, 0, 0 },
        { 1, 1, 1, 1, 0, 0, 0, 0 },
        { 1, 1, 1, 1, 0, 0, 0, 0 } });
    Integer[][] expected = new Integer[][] {
        { 0, 1 },
        { 1, 1 },
        { 0, 1 },
        { 1, 1 },
        { 1, 0 },
        null,
        null,
        null,
        null,
        { 1, 0 },
        { 1, 0 },
        { 1, 1 },
        { 1, 1 }, };
    assertArrayEquals(expected, traverse(actual).toArray());
  }
}