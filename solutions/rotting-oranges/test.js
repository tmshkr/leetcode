const { orangesRotting } = require("./solution.js");

test(`[[2,1,1],[1,1,0],[0,1,1]]`, () => {
  expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toEqual(4);
});

test(`[[2,1,1],[0,1,1],[1,0,1]]`, () => {
  expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toEqual(-1);
});

test(`[[0,2]]`, () => {
  expect(orangesRotting([[0,2]])).toEqual(0);
});

