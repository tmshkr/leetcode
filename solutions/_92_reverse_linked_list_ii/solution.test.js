const { reverseBetween, ListNode } = require("./solution.js");

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

test(`[1,2,3,4,5],2,4`, () => {
  const actual = reverseBetween(createList([1, 2, 3, 4, 5]), 2, 4);
  const expected = [1, 4, 3, 2, 5];
  expect(listToArray(actual)).toEqual(expected);
});

test(`[5],1,1`, () => {
  const actual = reverseBetween(createList([5]), 1, 1);
  const expected = [5];
  expect(listToArray(actual)).toEqual(expected);
});
