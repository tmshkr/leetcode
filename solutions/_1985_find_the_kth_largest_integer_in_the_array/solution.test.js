const { kthLargestNumber } = require("./solution.js");

test(`["3","6","7","10"],4`, () => {
  const inputs = [["3", "6", "7", "10"], 4];
  const expected = "3";
  const actual = kthLargestNumber(...inputs);
  expect(actual).toEqual(expected);
});

test(`["2","21","12","1"],3`, () => {
  const inputs = [["2", "21", "12", "1"], 3];
  const expected = "2";
  const actual = kthLargestNumber(...inputs);
  expect(actual).toEqual(expected);
});

test(`["0","0"],2`, () => {
  const inputs = [["0", "0"], 2];
  const expected = "0";
  const actual = kthLargestNumber(...inputs);
  expect(actual).toEqual(expected);
});
