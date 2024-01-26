
const { validateStackSequences } = require("./solution.js");


test(`[1,2,3,4,5],[4,5,3,2,1]`, () => {
const inputs = [[1,2,3,4,5],[4,5,3,2,1]];
const expected = true;
const actual = validateStackSequences(...inputs);
expect(actual).toEqual(expected);
});

test(`[1,2,3,4,5],[4,3,5,1,2]`, () => {
const inputs = [[1,2,3,4,5],[4,3,5,1,2]];
const expected = false;
const actual = validateStackSequences(...inputs);
expect(actual).toEqual(expected);
});

