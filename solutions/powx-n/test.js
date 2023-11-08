const { myPow } = require("./solution.js");

test(`2.00000,10`, () => {
  expect(myPow(2.00000,10)).toEqual(1024.00000);
});

test(`2.10000,3`, () => {
  expect(myPow(2.10000,3)).toEqual(9.26100);
});

test(`2.00000,-2`, () => {
  expect(myPow(2.00000,-2)).toEqual(0.25000);
});

