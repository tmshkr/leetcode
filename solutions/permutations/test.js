const { permute } = require("./solution.js");

function compare(a, b) {
  expect(a.length).toEqual(b.length);
  for (let i = 0; i < a.length; i++) {
    expect(a[i].length).toEqual(b[i].length);
    const s = new Set(a[i]);
    for (let j = 0; j < b[i].length; j++) {
      expect(s.has(b[i][j])).toEqual(true);
    }
  }
}

test(`[1,2,3]`, () => {
  const res = permute([1, 2, 3]);
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  compare(res, expected);
});

test(`[0,1]`, () => {
  const res = permute([0, 1]);
  const expected = [
    [0, 1],
    [1, 0],
  ];
  compare(res, expected);
});

test(`[1]`, () => {
  const res = permute([1]);
  const expected = [[1]];
  compare(res, expected);
});
