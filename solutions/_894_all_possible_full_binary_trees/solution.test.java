
package _894_all_possible_full_binary_trees;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import test_helpers.binary_tree.TestUtils;
import test_helpers.binary_tree.TreeNode;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("7")
  void allPossibleFBT0() {
    Solution s = new Solution();
    int n = 7;
    Integer[][] expected = {
        { 0, 0, 0, null, null, 0, 0, null, null, 0, 0 },
        { 0, 0, 0, null, null, 0, 0, 0, 0 },
        { 0, 0, 0, 0, 0, 0, 0 },
        { 0, 0, 0, 0, 0, null, null, null, null, 0, 0 },
        { 0, 0, 0, 0, 0, null, null, 0, 0 },
    };
    List<TreeNode> actual = s.allPossibleFBT(n);
    for (int i = 0; i < expected.length; i++) {
      assertArrayEquals(expected[i], TestUtils.converTreeToList(actual.get(i)).toArray());
    }

  }

  @Test
  @DisplayName("3")
  void allPossibleFBT1() {
    Solution s = new Solution();
    int n = 3;
    Integer[][] expected = {
        { 0, 0, 0 },
    };
    List<TreeNode> actual = s.allPossibleFBT(n);
    for (int i = 0; i < expected.length; i++) {
      assertArrayEquals(expected[i], TestUtils.converTreeToList(actual.get(i)).toArray());
    }
  }

}