
const { arraySign } = require("./solution.js");


test(`[-1,-2,-3,-4,3,2,1]`, () => {
const inputs = [[-1,-2,-3,-4,3,2,1]];
const expected = 1;
const actual = arraySign(...inputs);
expect(actual).toEqual(expected);
});

test(`[1,5,0,2,-3]`, () => {
const inputs = [[1,5,0,2,-3]];
const expected = 0;
const actual = arraySign(...inputs);
expect(actual).toEqual(expected);
});

test(`[-1,1,-1,1,-1]`, () => {
const inputs = [[-1,1,-1,1,-1]];
const expected = -1;
const actual = arraySign(...inputs);
expect(actual).toEqual(expected);
});

