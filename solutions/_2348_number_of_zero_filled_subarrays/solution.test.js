
const { zeroFilledSubarray } = require("./solution.js");


test(`[1,3,0,0,2,0,0,4]`, () => {
const inputs = [[1,3,0,0,2,0,0,4]];
const expected = 6;
const actual = zeroFilledSubarray(...inputs);
expect(actual).toEqual(expected);
});

test(`[0,0,0,2,0,0]`, () => {
const inputs = [[0,0,0,2,0,0]];
const expected = 9;
const actual = zeroFilledSubarray(...inputs);
expect(actual).toEqual(expected);
});

test(`[2,10,2019]`, () => {
const inputs = [[2,10,2019]];
const expected = 0;
const actual = zeroFilledSubarray(...inputs);
expect(actual).toEqual(expected);
});

