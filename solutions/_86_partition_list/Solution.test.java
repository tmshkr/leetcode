
package _86_partition_list;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

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
  @DisplayName("[1,4,3,2,5,2],3")
  void partition0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 4, 3, 2, 5, 2 });
    int[] expected = new int[] { 1, 2, 2, 4, 3, 5 };
    ListNode actual = s.partition(head, 3);
    assertArrayEquals(listToArray(actual), expected);
  }

  @Test
  @DisplayName("[2,1],2")
  void partition1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 2, 1 });
    int[] expected = new int[] { 1, 2 };
    ListNode actual = s.partition(head, 2);
    assertArrayEquals(listToArray(actual), expected);
  }

}