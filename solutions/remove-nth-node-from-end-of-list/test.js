const { removeNthFromEnd, ListNode } = require("./code.js");

function createList(l) {
  const head = new ListNode(l[0]);
  let prev = head;
  for (let i = 1; i < l.length; i++) {
    const node = new ListNode(l[i]);
    prev.next = node;
    prev = node;
  }
  return head;
}

function checkValues(head, l) {
  let curr = head;
  let i = 0;
  while (curr) {
    expect(curr.val).toEqual(l[i]);
    i++;
    curr = curr.next;
  }
}

test(`[1,2,3,4,5],2`, () => {
  const head = removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2);
  checkValues(head, [1, 2, 3, 5]);
});

test(`[1],1`, () => {
  const head = removeNthFromEnd(createList([1]), 1);
  checkValues(head, []);
});

test(`[1,2],1`, () => {
  const head = removeNthFromEnd(createList([1, 2]), 1);
  checkValues(head, [1]);
});
