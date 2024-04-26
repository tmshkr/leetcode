
package _173_binary_search_tree_iterator;

import static org.junit.jupiter.api.Assertions.assertEquals;
import test_helpers.binary_tree.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  @Test
  @DisplayName("BSTIterator")
  void BSTIteratorTest() {
    BSTIterator itr = new BSTIterator(
        TestUtils.createBinaryTree(new Integer[] { 7, 3, 15, null, null, 9, 20 }));

    assertEquals(itr.next(), 3);
    assertEquals(itr.next(), 7);
    assertEquals(itr.hasNext(), true);
    assertEquals(itr.next(), 9);
    assertEquals(itr.hasNext(), true);
    assertEquals(itr.next(), 15);
    assertEquals(itr.hasNext(), true);
    assertEquals(itr.next(), 20);
    assertEquals(itr.hasNext(), false);
  }
}