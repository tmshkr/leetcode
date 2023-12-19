
const { strStr } = require("./solution.js");


test(`"sadbutsad","sad"`, () => {
const inputs = ["sadbutsad","sad"];
const expected = 0;
const actual = strStr(...inputs);
expect(actual).toEqual(expected);
});

test(`"leetcode","leeto"`, () => {
const inputs = ["leetcode","leeto"];
const expected = -1;
const actual = strStr(...inputs);
expect(actual).toEqual(expected);
});

