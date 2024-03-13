const { splitListToParts, ListNode } = require("./solution.js");

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

test(`[1,2,3],5`, () => {
  const actual = splitListToParts(createList([1, 2, 3]), 5);
  const expected = [[1], [2], [3], [], []];
  for (let i = 0; i < actual.length; i++) {
    expect(listToArray(actual[i])).toEqual(expected[i]);
  }
});

test(`[1,2,3,4,5,6,7,8,9,10],3`, () => {
  const actual = splitListToParts(
    createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    3
  );
  const expected = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  for (let i = 0; i < actual.length; i++) {
    expect(listToArray(actual[i])).toEqual(expected[i]);
  }
});
