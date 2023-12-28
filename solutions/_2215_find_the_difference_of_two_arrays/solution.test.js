
const { findDifference } = require("./solution.js");


test(`[1,2,3],[2,4,6]`, () => {
const inputs = [[1,2,3],[2,4,6]];
const expected = [[1,3],[4,6]];
const actual = findDifference(...inputs);
expect(actual).toEqual(expected);
});

test(`[1,2,3,3],[1,1,2,2]`, () => {
const inputs = [[1,2,3,3],[1,1,2,2]];
const expected = [[3],[]];
const actual = findDifference(...inputs);
expect(actual).toEqual(expected);
});

