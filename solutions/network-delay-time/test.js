const { networkDelayTime } = require("./solution.js");

test(`[[2,1,1],[2,3,1],[3,4,1]],4,2`, () => {
  expect(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2)).toEqual(2);
});

test(`[[1,2,1]],2,1`, () => {
  expect(networkDelayTime([[1,2,1]],2,1)).toEqual(1);
});

test(`[[1,2,1]],2,2`, () => {
  expect(networkDelayTime([[1,2,1]],2,2)).toEqual(-1);
});

