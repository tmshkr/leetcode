
const { checkSubarraySum } = require("./solution.js");


test(`[23,2,4,6,7],6`, () => {
const inputs = [[23,2,4,6,7],6];
const expected = true;
const actual = checkSubarraySum(...inputs);
expect(actual).toEqual(expected);
});

test(`[23,2,6,4,7],6`, () => {
const inputs = [[23,2,6,4,7],6];
const expected = true;
const actual = checkSubarraySum(...inputs);
expect(actual).toEqual(expected);
});

test(`[23,2,6,4,7],13`, () => {
const inputs = [[23,2,6,4,7],13];
const expected = false;
const actual = checkSubarraySum(...inputs);
expect(actual).toEqual(expected);
});

