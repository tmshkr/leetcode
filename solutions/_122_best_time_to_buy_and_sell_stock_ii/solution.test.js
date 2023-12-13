
const { maxProfit } = require("./solution.js");


test(`[7,1,5,3,6,4]`, () => {
const inputs = [[7,1,5,3,6,4]];
const expected = 7;
const actual = maxProfit(...inputs);
expect(actual).toEqual(expected);
});

test(`[1,2,3,4,5]`, () => {
const inputs = [[1,2,3,4,5]];
const expected = 4;
const actual = maxProfit(...inputs);
expect(actual).toEqual(expected);
});

test(`[7,6,4,3,1]`, () => {
const inputs = [[7,6,4,3,1]];
const expected = 0;
const actual = maxProfit(...inputs);
expect(actual).toEqual(expected);
});

