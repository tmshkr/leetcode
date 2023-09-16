const { findWords } = require("./solution.js");

function compare(res, spec) {
  expect(res.length).toEqual(spec.length);
  const s = new Set(spec);

  for (const item of res) {
    expect(s.has(item)).toBe(true);
  }
}

test(`[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],["oath","pea","eat","rain"]`, () => {
  const res = findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  );

  compare(res, ["eat", "oath"]);
});

test(`[["a","b"],["c","d"]],["abcb"]`, () => {
  const res = findWords(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ["abcb"]
  );

  compare(res, []);
});
