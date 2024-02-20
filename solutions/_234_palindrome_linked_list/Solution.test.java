package _234_palindrome_linked_list;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private static ListNode createList(int[] l) {
    ListNode head = new ListNode(l[0]);
    ListNode cur = head;
    for (int i = 1; i < l.length; i++) {
      cur.next = new ListNode(l[i]);
      cur = cur.next;
    }
    return head;
  }

  @Test
  @DisplayName("[1,2,2,1]")
  void isPalindrome0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 2, 2, 1 });
    assertEquals(true, s.isPalindrome(head));
  }

  @Test
  @DisplayName("[1,2]")
  void isPalindrome1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 2 });
    assertEquals(false, s.isPalindrome(head));
  }

  @Test
  @DisplayName("[1,1,2,1]")
  void isPalindrome2() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 1, 2, 1 });
    assertEquals(false, s.isPalindrome(head));
  }
}
