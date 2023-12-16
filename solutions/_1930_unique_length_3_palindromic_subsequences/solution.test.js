
const { countPalindromicSubsequence } = require("./solution.js");


test(`"aabca"`, () => {
const inputs = ["aabca"];
const expected = 3;
const actual = countPalindromicSubsequence(...inputs);
expect(actual).toEqual(expected);
});

test(`"adc"`, () => {
const inputs = ["adc"];
const expected = 0;
const actual = countPalindromicSubsequence(...inputs);
expect(actual).toEqual(expected);
});

test(`"bbcbaba"`, () => {
const inputs = ["bbcbaba"];
const expected = 4;
const actual = countPalindromicSubsequence(...inputs);
expect(actual).toEqual(expected);
});

