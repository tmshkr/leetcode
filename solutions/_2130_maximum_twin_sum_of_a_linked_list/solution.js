/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    const tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  let res = 0;
  while (slow) {
    res = Math.max(res, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }

  return res;
};

module.exports = { pairSum };

/*
https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
*/
