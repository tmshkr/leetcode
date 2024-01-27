
const { asteroidCollision } = require("./solution.js");


test(`[5,10,-5]`, () => {
const inputs = [[5,10,-5]];
const expected = [5,10];
const actual = asteroidCollision(...inputs);
expect(actual).toEqual(expected);
});

test(`[8,-8]`, () => {
const inputs = [[8,-8]];
const expected = [];
const actual = asteroidCollision(...inputs);
expect(actual).toEqual(expected);
});

test(`[10,2,-5]`, () => {
const inputs = [[10,2,-5]];
const expected = [10];
const actual = asteroidCollision(...inputs);
expect(actual).toEqual(expected);
});

