const { removeElements, ListNode } = require("./solution.js");

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

test(`[1,2,6,3,4,5,6],6`, () => {
  const head = createList([1, 2, 6, 3, 4, 5, 6]);
  const val = 6;
  const expected = [1, 2, 3, 4, 5];
  const actual = removeElements(head, val);
  expect(listToArray(actual)).toEqual(expected);
});

test(`[],1`, () => {
  const inputs = [[], 1];
  const head = createList([]);
  const val = 1;
  const expected = [];
  const actual = removeElements(head, val);
  expect(listToArray(actual)).toEqual(expected);
});

test(`[7,7,7,7],7`, () => {
  const head = createList([7, 7, 7, 7]);
  const val = 7;
  const expected = [];
  const actual = removeElements(head, val);
  expect(listToArray(actual)).toEqual(expected);
});
