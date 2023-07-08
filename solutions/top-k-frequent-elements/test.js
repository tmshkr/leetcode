const { topKFrequent } = require("./code.js");

test(`[1,1,1,2,2,3],2`, () => {
  expect(topKFrequent([1,1,1,2,2,3],2)).toEqual([1,2]);
});

test(`[1],1`, () => {
  expect(topKFrequent([1],1)).toEqual([1]);
});

