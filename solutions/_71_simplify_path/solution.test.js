
const { simplifyPath } = require("./solution.js");


test(`"/home/"`, () => {
  const inputs = ["/home/"];
  const expected = "/home";
  const actual = simplifyPath(...inputs);
  expect(actual).toEqual(expected);
});

test(`"/../"`, () => {
  const inputs = ["/../"];
  const expected = "/";
  const actual = simplifyPath(...inputs);
  expect(actual).toEqual(expected);
});

test(`"/home//foo/"`, () => {
  const inputs = ["/home//foo/"];
  const expected = "/home/foo";
  const actual = simplifyPath(...inputs);
  expect(actual).toEqual(expected);
});

