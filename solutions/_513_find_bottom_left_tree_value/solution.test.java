
package _513_find_bottom_left_tree_value;

import static org.junit.jupiter.api.Assertions.assertEquals;
import test_helpers.binary_tree.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,1,3]")
  void findBottomLeftValue0() {
    Solution s = new Solution();
    int expected = 1;
    TreeNode root = TestUtils.createBinaryTree(new Integer[] { 2, 1, 3 });
    int actual = s.findBottomLeftValue(root);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3,4,null,5,6,null,null,7]")
  void findBottomLeftValue1() {
    Solution s = new Solution();
    int expected = 7;
    TreeNode root = TestUtils.createBinaryTree(new Integer[] { 1, 2, 3, 4, null, 5, 6, null, null, 7 });
    int actual = s.findBottomLeftValue(root);
    assertEquals(expected, actual);
  }
}