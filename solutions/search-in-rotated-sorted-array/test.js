const { search } = require("./solution.js");

test(`[4,5,6,7,0,1,2],0`, () => {
  expect(search([4,5,6,7,0,1,2],0)).toEqual(4);
});

test(`[4,5,6,7,0,1,2],3`, () => {
  expect(search([4,5,6,7,0,1,2],3)).toEqual(-1);
});

test(`[1],0`, () => {
  expect(search([1],0)).toEqual(-1);
});

