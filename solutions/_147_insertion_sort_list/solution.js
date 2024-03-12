function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head;

  const dummy = new ListNode();
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (prev?.val > curr.val) {
      prev = dummy;
    }
    while (prev.next && prev.next.val < curr.val) {
      prev = prev.next;
    }

    let nxt = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    curr = nxt;
  }

  return dummy.next;
};

module.exports = { insertionSortList, ListNode };

/*
https://leetcode.com/problems/insertion-sort-list/
*/
