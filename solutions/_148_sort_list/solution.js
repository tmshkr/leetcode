function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  const mid = getMid(head);
  const left = sortList(head);
  const right = sortList(mid);

  return merge(left, right);
};

function getMid(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return slow;
}

function merge(left, right) {
  const dummy = new ListNode();
  let cur = dummy;

  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }

  if (left) cur.next = left;
  if (right) cur.next = right;

  return dummy.next;
}

module.exports = { sortList, ListNode };

/*
https://leetcode.com/problems/sort-list/
*/
