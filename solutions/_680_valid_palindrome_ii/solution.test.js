
const { validPalindrome } = require("./solution.js");


test(`"aba"`, () => {
const inputs = ["aba"];
const expected = true;
const actual = validPalindrome(...inputs);
expect(actual).toEqual(expected);
});

test(`"abca"`, () => {
const inputs = ["abca"];
const expected = true;
const actual = validPalindrome(...inputs);
expect(actual).toEqual(expected);
});

test(`"abc"`, () => {
const inputs = ["abc"];
const expected = false;
const actual = validPalindrome(...inputs);
expect(actual).toEqual(expected);
});

