
const { partitionString } = require("./solution.js");


test(`"abacaba"`, () => {
const inputs = ["abacaba"];
const expected = 4;
const actual = partitionString(...inputs);
expect(actual).toEqual(expected);
});

test(`"ssssss"`, () => {
const inputs = ["ssssss"];
const expected = 6;
const actual = partitionString(...inputs);
expect(actual).toEqual(expected);
});

