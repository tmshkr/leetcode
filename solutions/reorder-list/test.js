const { reorderList, ListNode } = require("./code.js");

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

test(`[1,2,3,4]`, () => {
  const head = createList([1, 2, 3, 4]);
  reorderList(head);
  checkValues(head, [1, 4, 2, 3]);
});

test(`[1,2,3,4,5]`, () => {
  const head = createList([1, 2, 3, 4, 5]);
  reorderList(head);
  checkValues(head, [1, 5, 2, 4, 3]);
});
