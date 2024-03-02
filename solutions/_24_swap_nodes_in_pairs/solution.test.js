const { swapPairs, ListNode } = require("./solution.js");

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

test(`[1,2,3,4]`, () => {
  const actual = swapPairs(createList([1, 2, 3, 4]));
  const expected = [2, 1, 4, 3];
  expect(listToArray(actual)).toEqual(expected);
});

test(`[]`, () => {
  const actual = swapPairs(createList([]));
  const expected = [];
  expect(listToArray(actual)).toEqual(expected);
});

test(`[1]`, () => {
  const actual = swapPairs(createList([1]));
  const expected = [1];
  expect(listToArray(actual)).toEqual(expected);
});
