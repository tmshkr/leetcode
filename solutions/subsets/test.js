const { subsets } = require("./solution.js");

function compare(a, b) {
  expect(a.length).toEqual(b.length);
  const s = new Set(a.map((x) => JSON.stringify(x)));

  for (let i = 0; i < b.length; i++) {
    expect(s.has(JSON.stringify(b[i]))).toBe(true);
  }
}

test(`[1,2,3]`, () => {
  const res = subsets([1, 2, 3]);
  compare(res, [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
});

test(`[0]`, () => {
  const res = subsets([0]);
  compare(res, [[], [0]]);
});
