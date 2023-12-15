
const { subarraySum } = require("./solution.js");


test(`[1,1,1],2`, () => {
const inputs = [[1,1,1],2];
const expected = 2;
const actual = subarraySum(...inputs);
expect(actual).toEqual(expected);
});

test(`[1,2,3],3`, () => {
const inputs = [[1,2,3],3];
const expected = 2;
const actual = subarraySum(...inputs);
expect(actual).toEqual(expected);
});

