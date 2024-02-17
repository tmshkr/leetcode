
const { maximumRemovals } = require("./solution.js");


test(`"abcacb","ab",[3,1,0]`, () => {
  const inputs = ["abcacb","ab",[3,1,0]];
  const expected = 2;
  const actual = maximumRemovals(...inputs);
  expect(actual).toEqual(expected);
});

test(`"abcbddddd","abcd",[3,2,1,4,5,6]`, () => {
  const inputs = ["abcbddddd","abcd",[3,2,1,4,5,6]];
  const expected = 1;
  const actual = maximumRemovals(...inputs);
  expect(actual).toEqual(expected);
});

test(`"abcab","abc",[0,1,2,3,4]`, () => {
  const inputs = ["abcab","abc",[0,1,2,3,4]];
  const expected = 0;
  const actual = maximumRemovals(...inputs);
  expect(actual).toEqual(expected);
});

