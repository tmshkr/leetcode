
package _1721_swapping_nodes_in_a_linked_list;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  private static ListNode createList(int[] arr) {
    if (arr.length == 0) {
      return null;
    }
    ListNode head = new ListNode(arr[0]);
    ListNode curr = head;
    for (int i = 1; i < arr.length; i++) {
      curr.next = new ListNode(arr[i]);
      curr = curr.next;
    }
    return head;
  }

  private static int[] listToArray(ListNode head) {
    int len = 0;
    ListNode curr = head;
    while (curr != null) {
      len++;
      curr = curr.next;
    }
    int[] arr = new int[len];
    curr = head;
    for (int i = 0; i < len; i++) {
      arr[i] = curr.val;
      curr = curr.next;
    }
    return arr;
  }

  @Test
  @DisplayName("[1,2,3,4,5],2")
  void swapNodes0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 2, 3, 4, 5 });
    ListNode actual = s.swapNodes(head, 2);
    int[] expected = new int[] { 1, 4, 3, 2, 5 };
    assertArrayEquals(expected, listToArray(actual));
  }

  @Test
  @DisplayName("[7,9,6,6,7,8,3,0,9,5],5")
  void swapNodes1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 7, 9, 6, 6, 7, 8, 3, 0, 9, 5 });
    ListNode actual = s.swapNodes(head, 5);
    int[] expected = new int[] { 7, 9, 6, 6, 8, 7, 3, 0, 9, 5 };
    assertArrayEquals(expected, listToArray(actual));
  }

}