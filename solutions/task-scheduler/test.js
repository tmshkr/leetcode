const { leastInterval } = require("./code.js");

test(`["A","A","A","B","B","B"],2`, () => {
  expect(leastInterval(["A","A","A","B","B","B"],2)).toEqual(8);
});

test(`["A","A","A","B","B","B"],0`, () => {
  expect(leastInterval(["A","A","A","B","B","B"],0)).toEqual(6);
});

test(`["A","A","A","A","A","A","B","C","D","E","F","G"],2`, () => {
  expect(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"],2)).toEqual(16);
});

