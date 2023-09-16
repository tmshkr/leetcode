const { reverseKGroup, ListNode } = require("./solution.js");

function createList(l) {
  const head = new ListNode(l[0]);
  let prev = head;

  for (let i = 1; i < l.length; i++) {
    prev.next = new ListNode(l[i]);
    prev = prev.next;
  }

  return head;
}

function checkList(head, l) {
  let curr = head;
  let i = 0;

  while (curr) {
    expect(curr.val).toEqual(l[i]);
    i++;
    curr = curr.next;
  }
}

test(`[1,2,3,4,5],2`, () => {
  const head = reverseKGroup(createList([1, 2, 3, 4, 5]), 2);
  checkList(head, [2, 1, 4, 3, 5]);
});

test(`[1,2,3,4,5],3`, () => {
  const head = reverseKGroup(createList([1, 2, 3, 4, 5]), 3);
  checkList(head, [3, 2, 1, 4, 5]);
});
