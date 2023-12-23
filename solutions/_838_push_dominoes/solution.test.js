const { pushDominoes } = require("./solution.js");

test(`"RR.L"`, () => {
  const inputs = ["RR.L"];
  const expected = "RR.L";
  const actual = pushDominoes(...inputs);
  expect(actual).toEqual(expected);
});

test(`".L.R...LR..L.."`, () => {
  const inputs = [".L.R...LR..L.."];
  const expected = "LL.RR.LLRRLL..";
  const actual = pushDominoes(...inputs);
  expect(actual).toEqual(expected);
});
