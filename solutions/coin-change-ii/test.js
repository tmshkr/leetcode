const { change } = require("./solution.js");

test(`5,[1,2,5]`, () => {
  expect(change(5,[1,2,5])).toEqual(4);
});

test(`3,[2]`, () => {
  expect(change(3,[2])).toEqual(0);
});

test(`10,[10]`, () => {
  expect(change(10,[10])).toEqual(1);
});

