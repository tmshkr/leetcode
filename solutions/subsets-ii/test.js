const { subsetsWithDup } = require("./solution.js");

function compare(a, b) {
  expect(a.length).toBe(b.length);
  for (let i = 0; i < a.length; i++) {
    expect(a[i].length).toBe(b[i].length);
    for (let j = 0; j < a[i].length; j++) {
      expect(a[i][j]).toBe(b[i][j]);
    }
  }
}

test(`[1,2,2]`, () => {
  const res = subsetsWithDup([1, 2, 2]);
  res.sort();
  const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
  compare(res, expected);
});

test(`[0]`, () => {
  const res = subsetsWithDup([0]);
  res.sort();
  const expected = [[], [0]];
  compare(res, expected);
});
