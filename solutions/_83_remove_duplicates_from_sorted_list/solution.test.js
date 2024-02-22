const { deleteDuplicates, ListNode } = require("./solution.js");

function createList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head) {
  const arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}

test(`[1,1,2]`, () => {
  const head = createList([1, 1, 2]);
  const expected = [1, 2];
  const actual = deleteDuplicates(head);
  expect(listToArray(actual)).toEqual(expected);
});

test(`[1,1,2,3,3]`, () => {
  const head = createList([1, 1, 2, 3, 3]);
  const expected = [1, 2, 3];
  const actual = deleteDuplicates(head);
  expect(listToArray(actual)).toEqual(expected);
});
