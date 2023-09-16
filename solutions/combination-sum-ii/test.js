const { combinationSum2 } = require("./solution");

function compare(a, b) {
  expect(a.length).toBe(b.length);
  for (let i = 0; i < a.length; i++) {
    expect(a[i].length).toBe(b[i].length);
    for (let j = 0; j < a[i].length; j++) {
      expect(a[i][j]).toBe(b[i][j]);
    }
  }
}

test("candidates = [10,1,2,7,6,1,5], target = 8", () => {
  const actual = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
  const expected = [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ];
  compare(actual, expected);
});

test("candidates = [2,5,2,1,2], target = 5", () => {
  const actual = combinationSum2([2, 5, 2, 1, 2], 5);
  const expected = [[1, 2, 2], [5]];
  compare(actual, expected);
});
