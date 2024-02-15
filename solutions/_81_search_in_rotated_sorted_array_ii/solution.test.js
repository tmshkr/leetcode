
const { search } = require("./solution.js");


test(`[2,5,6,0,0,1,2],0`, () => {
  const inputs = [[2,5,6,0,0,1,2],0];
  const expected = true;
  const actual = search(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,5,6,0,0,1,2],3`, () => {
  const inputs = [[2,5,6,0,0,1,2],3];
  const expected = false;
  const actual = search(...inputs);
  expect(actual).toEqual(expected);
});

