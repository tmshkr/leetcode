const { addTwoNumbers, ListNode } = require("./code.js");

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

function checkList(head, l) {
  let curr = head;
  let i = 0;

  while (curr) {
    expect(curr.val).toEqual(l[i]);
    i++;
    curr = curr.next;
  }
}

test(`[2,4,3],[5,6,4]`, () => {
  const head = addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4]));
  checkList(head, [7, 0, 8]);
});

test(`[0],[0]`, () => {
  const head = addTwoNumbers(createList([0]), createList([0]));
  checkList(head, [0]);
});

test(`[9,9,9,9,9,9,9],[9,9,9,9]`, () => {
  const head = addTwoNumbers(
    createList([9, 9, 9, 9, 9, 9, 9]),
    createList([9, 9, 9, 9])
  );
  checkList(head, [8, 9, 9, 9, 0, 0, 0, 1]);
});
