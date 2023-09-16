const { partition } = require("./solution.js");

function compare(a, b) {
  expect(a.length).toEqual(b.length);
  for (let i = 0; i < a.length; i++) {
    expect(a[i].length).toEqual(b[i].length);
    for (let j = 0; j < a[i].length; j++) {
      expect(a[i][j]).toEqual(b[i][j]);
    }
  }
}

test(`"aab"`, () => {
  const result = partition("aab");
  compare(result, [
    ["a", "a", "b"],
    ["aa", "b"],
  ]);
});

test(`"a"`, () => {
  const result = partition("a");
  compare(result, [["a"]]);
});
