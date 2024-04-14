const { buildTree } = require("./solution.js");

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

test(`[9,3,15,20,7],[9,15,7,20,3]`, () => {
  const inputs = [
    [9, 3, 15, 20, 7],
    [9, 15, 7, 20, 3],
  ];
  const expected = [3, 9, 20, null, null, 15, 7];
  const actual = buildTree(...inputs);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[-1],[-1]`, () => {
  const inputs = [[-1], [-1]];
  const expected = [-1];
  const actual = buildTree(...inputs);
  expect(converTreeToList(actual)).toEqual(expected);
});
