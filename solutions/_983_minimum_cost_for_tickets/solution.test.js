
const { mincostTickets } = require("./solution.js");


test(`[1,4,6,7,8,20],[2,7,15]`, () => {
  const inputs = [[1,4,6,7,8,20],[2,7,15]];
  const expected = 11;
  const actual = mincostTickets(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]`, () => {
  const inputs = [[1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]];
  const expected = 17;
  const actual = mincostTickets(...inputs);
  expect(actual).toEqual(expected);
});

