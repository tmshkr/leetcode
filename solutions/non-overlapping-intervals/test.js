const { eraseOverlapIntervals } = require("./solution.js");

test(`[[1,2],[2,3],[3,4],[1,3]]`, () => {
  expect(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])).toEqual(1);
});

test(`[[1,2],[1,2],[1,2]]`, () => {
  expect(eraseOverlapIntervals([[1,2],[1,2],[1,2]])).toEqual(2);
});

test(`[[1,2],[2,3]]`, () => {
  expect(eraseOverlapIntervals([[1,2],[2,3]])).toEqual(0);
});

