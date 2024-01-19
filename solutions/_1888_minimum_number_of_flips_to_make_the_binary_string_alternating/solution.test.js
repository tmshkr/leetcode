
const { minFlips } = require("./solution.js");


test(`"111000"`, () => {
const inputs = ["111000"];
const expected = 2;
const actual = minFlips(...inputs);
expect(actual).toEqual(expected);
});

test(`"010"`, () => {
const inputs = ["010"];
const expected = 0;
const actual = minFlips(...inputs);
expect(actual).toEqual(expected);
});

test(`"1110"`, () => {
const inputs = ["1110"];
const expected = 1;
const actual = minFlips(...inputs);
expect(actual).toEqual(expected);
});

