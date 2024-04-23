const { allPossibleFBT } = require("./solution.js");
const { converTreeToList } = require("../test_helpers/binary-tree.js");

test(`7`, () => {
  const inputs = [7];
  const expected = [
    [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
    [0, 0, 0, null, null, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
    [0, 0, 0, 0, 0, null, null, 0, 0],
  ];
  const actual = allPossibleFBT(...inputs);
  for (const tree of actual) {
    expect(converTreeToList(tree)).toEqual(expected.shift());
  }
});

test(`3`, () => {
  const inputs = [3];
  const expected = [[0, 0, 0]];
  const actual = allPossibleFBT(...inputs);
  for (const tree of actual) {
    expect(converTreeToList(tree)).toEqual(expected.shift());
  }
});
