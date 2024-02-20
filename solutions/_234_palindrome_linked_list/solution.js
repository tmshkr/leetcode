/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  // find the middle (slow)
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half
  let left = head;
  let right = reverse(slow);

  // check palindrome
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
};

function reverse(cur) {
  let prev = null;
  while (cur) {
    const tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }
  return prev;
}

module.exports = { isPalindrome };

/*
https://leetcode.com/problems/palindrome-linked-list/
*/
