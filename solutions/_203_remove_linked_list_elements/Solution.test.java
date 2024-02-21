package _203_remove_linked_list_elements;

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
  @DisplayName("[1,2,6,3,4,5,6],6")
  void removeElements0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 2, 6, 3, 4, 5, 6 });
    int val = 6;
    int[] expected = new int[] { 1, 2, 3, 4, 5 };
    ListNode actual = s.removeElements(head, val);
    assertArrayEquals(listToArray(actual), expected);
  }

  @Test
  @DisplayName("[],1")
  void removeElements1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {});
    int val = 1;
    int[] expected = new int[] {};
    ListNode actual = s.removeElements(head, val);
    assertArrayEquals(listToArray(actual), expected);
  }

  @Test
  @DisplayName("[7,7,7,7],7")
  void removeElements2() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 7, 7, 7, 7 });
    int val = 7;
    int[] expected = new int[] {};
    ListNode actual = s.removeElements(head, val);
    assertArrayEquals(listToArray(actual), expected);
  }
}
