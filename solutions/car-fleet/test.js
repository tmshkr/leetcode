const { carFleet } = require("./solution.js");

test(`12,[10,8,0,5,3],[2,4,1,1,3]`, () => {
  expect(carFleet(12,[10,8,0,5,3],[2,4,1,1,3])).toEqual(3);
});

test(`10,[3],[3]`, () => {
  expect(carFleet(10,[3],[3])).toEqual(1);
});

test(`100,[0,2,4],[4,2,1]`, () => {
  expect(carFleet(100,[0,2,4],[4,2,1])).toEqual(1);
});

