const { canFinish } = require("./solution.js");

test(`2,[[1,0]]`, () => {
  expect(canFinish(2,[[1,0]])).toEqual(true);
});

test(`2,[[1,0],[0,1]]`, () => {
  expect(canFinish(2,[[1,0],[0,1]])).toEqual(false);
});

