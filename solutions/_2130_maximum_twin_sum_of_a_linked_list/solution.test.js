const { pairSum } = require("./solution.js");

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

test(`[5,4,2,1]`, () => {
  const actual = pairSum(createList([5, 4, 2, 1]));
  const expected = 6;
  expect(actual).toEqual(expected);
});

test(`[4,2,2,3]`, () => {
  const actual = pairSum(createList([4, 2, 2, 3]));
  const expected = 7;
  expect(actual).toEqual(expected);
});

test(`[1,100000]`, () => {
  const actual = pairSum(createList([1, 100000]));
  const expected = 100001;
  expect(actual).toEqual(expected);
});
