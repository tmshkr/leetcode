function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode(0);
  let right = new ListNode(0);
  let lesser = left;
  let greater = right;
  let curr = head;
  while (curr !== null) {
    if (curr.val < x) {
      lesser.next = curr;
      lesser = lesser.next;
    } else {
      greater.next = curr;
      greater = greater.next;
    }
    curr = curr.next;
  }
  lesser.next = right.next;
  greater.next = null;
  return left.next;
};

module.exports = { partition, ListNode };

/*
https://leetcode.com/problems/partition-list/
*/
