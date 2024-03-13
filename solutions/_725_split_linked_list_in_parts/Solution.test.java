
package _725_split_linked_list_in_parts;

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
  @DisplayName("[1,2,3],5")
  void splitListToParts0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {1, 2, 3});
    ListNode[] result = s.splitListToParts(head, 5);
    int[][] expected = new int[][] {
      new int[] {1},
      new int[] {2},
      new int[] {3},
      new int[] {},
      new int[] {},
    };
    for (int i = 0; i < 5; i++) {
      assertArrayEquals(expected[i], listToArray(result[i]));
    }
  }

  @Test
  @DisplayName("[1,2,3,4,5,6,7,8,9,10],3")
  void splitListToParts1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    ListNode[] result = s.splitListToParts(head, 3);
    int[][] expected = new int[][] {
      new int[] {1, 2, 3, 4},
      new int[] {5, 6, 7},
      new int[] {8, 9, 10},
    };
    for (int i = 0; i < 3; i++) {
      assertArrayEquals(expected[i], listToArray(result[i]));
    }
  }

}