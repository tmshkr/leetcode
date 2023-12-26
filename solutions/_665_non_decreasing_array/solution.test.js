
const { checkPossibility } = require("./solution.js");


test(`[4,2,3]`, () => {
const inputs = [[4,2,3]];
const expected = true;
const actual = checkPossibility(...inputs);
expect(actual).toEqual(expected);
});

test(`[4,2,1]`, () => {
const inputs = [[4,2,1]];
const expected = false;
const actual = checkPossibility(...inputs);
expect(actual).toEqual(expected);
});

