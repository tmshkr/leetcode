const { generateTrees } = require("./solution.js");

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

test(`3`, () => {
  const inputs = [3];
  const expected = [
    [1, null, 2, null, 3],
    [1, null, 3, 2],
    [2, 1, 3],
    [3, 1, null, null, 2],
    [3, 2, null, 1],
  ];
  const actual = generateTrees(...inputs);
  expect(actual.map((x) => converTreeToList(x))).toEqual(expected);
});

test(`1`, () => {
  const inputs = [1];
  const expected = [[1]];
  const actual = generateTrees(...inputs);
  expect(actual.map((x) => converTreeToList(x))).toEqual(expected);
});
