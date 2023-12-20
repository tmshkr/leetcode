
const { findAnagrams } = require("./solution.js");


test(`"cbaebabacd","abc"`, () => {
const inputs = ["cbaebabacd","abc"];
const expected = [0,6];
const actual = findAnagrams(...inputs);
expect(actual).toEqual(expected);
});

test(`"abab","ab"`, () => {
const inputs = ["abab","ab"];
const expected = [0,1,2];
const actual = findAnagrams(...inputs);
expect(actual).toEqual(expected);
});

