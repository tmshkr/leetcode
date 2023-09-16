const { exist } = require("./solution.js");

test(`[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"`, () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  ).toEqual(true);
});

test(`[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"`, () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE"
    )
  ).toEqual(true);
});

test(`[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"`, () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB"
    )
  ).toEqual(false);
});
