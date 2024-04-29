
const { getOrder } = require("./solution.js");


test(`[[1,2],[2,4],[3,2],[4,1]]`, () => {
  const inputs = [[[1,2],[2,4],[3,2],[4,1]]];
  const expected = [0,2,3,1];
  const actual = getOrder(...inputs);
  expect(actual).toEqual(expected);
});

test(`[[7,10],[7,12],[7,5],[7,4],[7,2]]`, () => {
  const inputs = [[[7,10],[7,12],[7,5],[7,4],[7,2]]];
  const expected = [4,3,2,0,1];
  const actual = getOrder(...inputs);
  expect(actual).toEqual(expected);
});

