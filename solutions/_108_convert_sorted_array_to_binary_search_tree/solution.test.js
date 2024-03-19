const { sortedArrayToBST } = require("./solution.js");

function converTreeToList(root) {
  if (!root) return [];
  const res = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();
    if (node === null) {
      res.push(null);
      continue;
    }
    res.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }

  while (res[res.length - 1] === null) {
    res.pop();
  }

  return res;
}

test(`[-10,-3,0,5,9]`, () => {
  const actual = sortedArrayToBST([-10, -3, 0, 5, 9]);
  const expected = [0, -3, 9, -10, null, 5];
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[1,3]`, () => {
  const actual = sortedArrayToBST([1, 3]);
  const expected = [3, 1];
  expect(converTreeToList(actual)).toEqual(expected);
});
