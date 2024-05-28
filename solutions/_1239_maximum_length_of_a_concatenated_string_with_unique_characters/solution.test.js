
const { maxLength } = require("./solution.js");


test(`["un","iq","ue"]`, () => {
  const inputs = [["un","iq","ue"]];
  const expected = 4;
  const actual = maxLength(...inputs);
  expect(actual).toEqual(expected);
});

test(`["cha","r","act","ers"]`, () => {
  const inputs = [["cha","r","act","ers"]];
  const expected = 6;
  const actual = maxLength(...inputs);
  expect(actual).toEqual(expected);
});

test(`["abcdefghijklmnopqrstuvwxyz"]`, () => {
  const inputs = [["abcdefghijklmnopqrstuvwxyz"]];
  const expected = 26;
  const actual = maxLength(...inputs);
  expect(actual).toEqual(expected);
});

