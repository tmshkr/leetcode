
const { findRepeatedDnaSequences } = require("./solution.js");


test(`"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"`, () => {
const inputs = ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"];
const expected = ["AAAAACCCCC","CCCCCAAAAA"];
const actual = findRepeatedDnaSequences(...inputs);
expect(actual).toEqual(expected);
});

test(`"AAAAAAAAAAAAA"`, () => {
const inputs = ["AAAAAAAAAAAAA"];
const expected = ["AAAAAAAAAA"];
const actual = findRepeatedDnaSequences(...inputs);
expect(actual).toEqual(expected);
});

