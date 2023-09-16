const { search } = require("./solution.js");

test(`[-1,0,3,5,9,12],9`, () => {
  expect(search([-1,0,3,5,9,12],9)).toEqual(4);
});

test(`[-1,0,3,5,9,12],2`, () => {
  expect(search([-1,0,3,5,9,12],2)).toEqual(-1);
});

